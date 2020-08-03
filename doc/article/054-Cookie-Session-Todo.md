# Cookie Session

## Cookie

### 什么是 Cookie

- 存储在浏览器的一段字符串（最大 5kb）
- 跨域不共享
- 格式如 `k1=v1;k2=v2;k3=v3`因此可以存储结构化数据
- 每次发送 http 请求，会将请求域的 Cookie 一起发送给 Server
- Server 可以修改 Cookie 并返回给浏览器
- 浏览器也可以 JS 修改 Cookie （有限制）

### 浏览器与 Cookie

#### 查看 Cookie

- 控制台 Network
- 控制台 Application ==> Storage ==> Cookies
- `document.cookie`

#### 操作 Cookie 

- 通过累加的方式对 Cookie 赋值

  ```javascript
  document.cookie = "k1=100;"
  document.cookie = "k2=200;"
  document.cookie // "k1=100; k2=200"
  ```

### 服务端与 Cookie

#### 查看 Cookie

```javascript
const cookie = {}
const cookieText = req.headers.cookie || ''
cookieText.split('; ').forEach(item => {
  if (!item) return
  const [key, value] = item.split('=')
  cookie[key] = value
})
console.log('cookie', cookie) // { k1: '100', k2: '200', k3: '300' }
```

#### 修改 Cookie

```javascript
// 设置一个 Cookie
res.setHeader('Set-Cookie', 's1=100; path=/')
// 设置多个 Cookie
res.setHeader('Set-Cookie', ['s1=100; path=/', 's2=200; path=/'])
// 禁止客户端修改 Cookie
res.setHeader('Set-Cookie', 's1=100; path=/; httpOnly')
```

#### 实现登录验证

