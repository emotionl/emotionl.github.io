---
title: Vite 在开发模式使用 HTTPS
date: 2021-06-21 03:06:53
tags:
- Vite
---

在使用 Vite 进行前端开发的过程中，有时需要模拟一下 HTTPS 的环境（比如开启 PWA），但是如果直接设置`server.https = true`，浏览器会报**您的连接不是私密连接**这样的警告，那么该怎么做呢？

仔细的查看了下文档，发现已经说的很清晰了`server.https`这个值也可以是一个传递给 `https.createServer()` 的 [选项对象](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener)。下面是示例

```javascript
// curl -k https://localhost:8000/
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
```

我们要做的就是把 `options` 赋值给 `server.https`。当然还需要借助工具去生成 key 和 cert。

## 操作步骤

1. 安装 [mkcert](https://github.com/FiloSottile/mkcert)

   我使用的是 Win10，就使用 choco 来安装了

   ```powershell
   choco install mkcert
   ```

2. 生成 key 和 cert

   为了便于管理我在项目的根目录下创建了 ssl 文件夹

   ```powershell
   mkdir ssl
   cd ssl
   mkcert localhost
   ```

   操作完成后你会发现 ssl 目录下多了两个文件，也就是我们需要的 key 和 cert

   ```
   ssl
   ├── localhost-key.pem
   └── localhost.pem
   ```

3. 配置 vite.config.js

   ```javascript
   import { defineConfig } from 'vite'
   import path from 'path'
   import fs from 'fs'
   
   export default defineConfig({
     server: {
       https: {
         key: fs.readFileSync(path.resolve(__dirname, './ssl/localhost-key.pem')),
         cert: fs.readFileSync(path.resolve(__dirname, './ssl/localhost.pem'))
       }
     }
   })
   ```

   下次在启动就能看到地址栏上的小锁头了 🔒





 