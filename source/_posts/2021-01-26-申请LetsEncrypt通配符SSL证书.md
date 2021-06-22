---
title: 申请LetsEncrypt通配符SSL证书
date: 2021-01-26 03:49:01
categories: 
- 运维
tags:
- Linux
- Nginx
---

## 获取 Certbot 客户端

```shell
# 下载 Certbot 客户端
wget https://dl.eff.org/certbot-auto

# 设为可执行权限
chmod a+x certbot-auto
```

## 申请通配符证书

```shell
./certbot-auto certonly  -d "*.emotionl.fun" --manual --preferred-challenges dns-01  --server https://acme-v02.api.letsencrypt.org/directory
```

完这一步之后，请根据命令行的提示输入相应内容