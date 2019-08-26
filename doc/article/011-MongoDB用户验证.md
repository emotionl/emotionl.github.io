# MongoDB用户验证

### 创建超级管理员

```javascript
use admin;
db.createUser({
    user: 'root',
    pwd: '123456',
    roles: [{ role: 'root', db: 'admin' }]
});
```

### 修改 mongod.conf 打开用户验证

```
security:
  authorization: "enabled"
```

### 重启 MongoDB 服务

```shell
service mongod restart
```

### 用户认证

```shell
use admin
db.auth("root", "123456")
```

### 给数据库添加用户

```javascript
use shop
db.createUser({
    user: 'shop_admin',
    pwd: '123456',
    roles: [{ role: 'readWrite', db: 'shop' }]
});
```
