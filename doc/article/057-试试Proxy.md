# 试试 Proxy 和 Reflect

## Proxy

使用`ownKeys`拦截 `Reflect.ownKeys()`也可以拦截 `Object.keys() ; for in Loop ; Object.getOwnPropertySymbols()` 中的部分的 key 

```javascript
const obj = {
  attr: 'attr',
  _attr: '_attr',
  [Symbol('attr')]: 'Symbol(attr)',
  [Symbol('_attr')]: 'Symbol(_attr)'
}

// 未使用 Proxy 的 ownKeys 拦截
console.log(Object.keys(obj)) // ["attr", "_attr"]
console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(attr), Symbol(_attr)]
console.log(Reflect.ownKeys(obj)) // ["attr", "_attr", Symbol(attr), Symbol(_attr)]
for (const key in obj) {
  console.log(key) // attr _attr
}

// 使用 Proxy 的 ownKeys 拦截
const p = new Proxy(obj, {
  ownKeys(target) {
    const normalKeys = Object.keys(target)
    const normalFilterKeys = normalKeys.filter((key) => !key.startsWith('_')) // 拦截以下划线开头的 key
    const symbolKeys = Object.getOwnPropertySymbols(target)
    const symbolFilterKeys = symbolKeys.filter((key) => !key.toString().startsWith('Symbol(_')) // 拦截以下划线开头的 key
    return [...normalFilterKeys, ...symbolFilterKeys]
  }
})

console.log(Object.keys(p)) // ["attr"]
console.log(Object.getOwnPropertySymbols(p)) // [Symbol(attr)]
console.log(Reflect.ownKeys(p)) // ["attr", Symbol(attr)]
for (const key in p) {
  console.log(key) // attr
}
```

来个综合案例

```javascript
const userInfo = {
  name: 'Jack',
  age: 17,
  _address: 'London UK'
}

const p = new Proxy(userInfo, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error(`${prop} 不可访问`)
    } else {
      return target[prop] || 'N/A'
    }
  },
  set(target, prop, value) {
    if (prop.startsWith('_')) {
      throw new Error(`不能设置 ${prop}`)
    } else {
      target[prop] = value
      return true
    }
  },
  deleteProperty(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error(`不能删除${prop}`)
    } else {
      delete target[prop]
      return true
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith('_'))
  }
})
```

使用 `apply`拦截函数的调用（包装函数）

```javascript
const sum = (a, b) => {
  return a + b
}

const sumText = new Proxy(sum, {
  apply(target, thisArg, argArray) {
    return `total number is ${target(...argArray)}`
  }
})

sumText(10, 20)
```

## Reflect