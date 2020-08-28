# 试试 Proxy 和 Reflect

## Proxy

使用 `Object.defineProperty()`模拟`Vue`的数据绑定

```javascript
class VData {
  constructor({ data }) {
    this.data = data
    this.bindData(data)
  }
  bindData(data) {
    const newData = {}
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        newData[key] = data[key]
        Object.defineProperty(data, key, {
          get() {
            return newData[key]
          },
          set(val) {
            newData[key] = val
          }
        })
      }
    }
  }
}
const v = new VData({
  data: {
    a: 1,
    b: 2
  }
})
```

使用`Proxy`封装一个可设置类型的数组`TypeArray`，并且对数组中不存在的值返回默认值

```javascript
const TypeArray = (type, defaultValue = 'N/A', initArray = []) => {
  return new Proxy(initArray, {
    get(target, prop) {
      return target[prop] || defaultValue
    },
    set(target, prop, value) {
      if (typeof value === type || prop === 'length') {
        target[prop] = value
        return true
      } else {
        return false
      }
    }
  })
}

const numArr = TypeArray('number')
numArr.push(1)   // Proxy 代理数组 数组本身的方法属性不会被破坏
numArr.push("2") // Uncaught TypeError: 'set' on proxy: trap returned falsish for property '2' at Proxy.push (<anonymous>)
```

使用 `has`方法捕获`in`操作符

```javascript
const checkRange = new Proxy(
  {
    start: 0,
    end: 100
  },
  {
    has(target, prop) {
      return prop >= target.start && prop <= target.end
    }
  }
)

console.log(50 in checkRange)	// false
console.log(150 in checkRange)	// true
```

使用`ownKeys`拦截

- `Object.getOwnPropertyNames()`
- `Object.getOwnPropertySymbols() `
- `Object.keys()`
- `Reflect.ownKeys()`
- `for in loop`

```javascript
const userInfo = {
  name: 'Jack',
  age: 17,
  _address: 'Paris FR'
}

const p = new Proxy(userInfo, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith('_'))
  }
})

console.log(Object.keys(p)) // ["name", "age"]
console.log(Object.getOwnPropertyNames(p)) // ["name", "age"]
for (const key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key) // name age
  }
}

console.log(Reflect.ownKeys(p))
```




## Reflect

