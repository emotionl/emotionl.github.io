# Promise TODO

> [Promise/A+ 规范](https://www.ituring.com.cn/article/66566)

## 使用 Promise

```javascript
const fakeProm = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num > 0.5 ? resolve('success') : reject('fail')
        }, 1000)
    })
}
fakeProm()
    .then(console.log)
    .catch(console.log)

```

