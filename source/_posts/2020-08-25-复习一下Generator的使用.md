---
title: 复习一下Generator的使用
date: 2020-08-25 00:00:00
categories: 
- 前端
tags:
- JavaScript
---

先来个例题 看一下结果

```javascript
function* addGen(x) {
  let y = (yield x + 5) * 2
  let z = yield y / 4
  return x + y + z
}

let g = addGen(1)
console.log(g.next()) // 1> {value: 6, done: false}
console.log(g.next()) // 2> {value: NaN, done: false}
console.log(g.next()) // 3> {value: NaN, done: true}
/* 
  1> g.next() 返回的 value 是 x + 5 => 6
  2> g.next() 返回的 value 是 y / 3，由于本次 g.next() 并未传值，所以 y = undefined * 2 => NaN，所以本次的 value 是 NaN / 3 => NaN
  3> g.next() 返回的 value 是 x + y + z => 1 + NaN + NaN => NaN
*/
```

如何让以上代码执行的更符合一般的逻辑`y = (1 + 5) * 2 ; z = y / 4`，最后返回 16

```javascript
function* addGen(x) {
  let y = (yield x + 5) * 2
  let z = yield y / 4
  return x + y + z
}

let g = addGen(1)
let v1 = g.next().value
let v2 = g.next(v1).value
let v3 = g.next(v2).value
console.log(v3)
```

再来个实例，以 “敲七” 这个游戏为例，从零开始获取每一个符合 “敲七” 的数字

```javascript
function* count7Gen(count = 1) {
  while (true) {
    if (count % 7 === 0 || count % 10 === 7) {
      yield count
    }
    count++
  }
}

const c7g = count7Gen()

console.log(c7g.next()) // {value: 7, done: false}
console.log(c7g.next()) // {value: 14, done: false}
console.log(c7g.next()) // {value: 17, done: false}
console.log(c7g.next()) // {value: 21, done: false}
console.log(c7g.next()) // {value: 27, done: false}
```

> `count7Gen`这个函数本身是一个死循环，但是 `Generator`这种模式使其能在特定的节点停止或继续

模拟一个简单的 `Generator`

```javascript
const makeGenerator = (list) => {
  let index = 0
  return {
    next: () => {
      const value = list[index++]
      const done = index >= list.length
      return { value, done }
    }
  }
}

const g = makeGenerator(['a', 'b', 'c'])
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
```
