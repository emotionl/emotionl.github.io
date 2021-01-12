---
title: 使用nvm管理Node.js版本
date: 2021-01-07 17:12:09
tags: 
- Node.js
---

## 背景

在实验 `Vue3` 的时候，提示 `Error: Cannot find module 'vue-loader-v16/package.json'`，排查后发现是`Node.js npm`的问题于是安装了最新的 `14.15.4 LTS`，但是在解决完 `Vue3`的问题后，使用 `npm`打包老项目又挂了，所以决定使用 `nvm`去管理 `Node.js`的版本

## 安装

因为是使用 `windows`开发，所以使用 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)，版本选择最新的就可以。

安装完毕之后，需要去 `C:\Users\{用户名}\AppData\Roaming\nvm`目录下，给 `settings.txt`添加 `node_mirror`和 `npm_mirror`配置

```
root: C:\Users\emotionl\AppData\Roaming\nvm
path: D:\Program Files\nodejs
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

## 使用

安装想要使用的 Node.js 版本

```
nvm install <version>
```

查看已安装的 Node.js 版本

```
nvm list [available]  
```

使用已经安装的 Node.js 版本

```
nvm use [version]
```

