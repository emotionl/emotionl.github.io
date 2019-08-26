# 在 CentOS 下使用 MySQL

## CentOS 安装 MySQL

> [Centos7安装MySQL](https://juejin.im/post/5c4a874c6fb9a049d05e18a6)


## Linux 下命令操作

| 描述     | 命令                    |
| -------- | ----------------------- |
| 启动     | service mysqld start    |
| 停止     | service mysqld stop    |
| 重启     | service mysqld restart |
| 查看状态 | service mysqld status  |

## 填坑

### MySQL Error: : 'Access denied for user 'root'@'localhost'

1. Open & Edit `/etc/my.cnf`
2. Add `skip-grant-tables` under `[mysqld]`
3. Restart Mysql
4. You should be able to login to mysql now using the below command `mysql -u root -p`
5. Run `mysql> flush privileges;`
6. Set new password by *ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword';*
7. Go back to /etc/my.cnf and **remove/comment** skip-grant-tables
8. Restart Mysql
9. Now you will be able to login with the new password `mysql -u root -p`

> https://stackoverflow.com/questions/41645309/mysql-error-access-denied-for-user-rootlocalhost

### host ... is not allowed to connect to this MySql server

1. `mysql -u root -p`	[CentOS]
2. `use mysql;`[MySQL]
3. `select host from user where user='root';`[MySQL]
4. `update user set host = '%' where user ='root'`[MySQL]
5. `flush privileges;`[MySQL]
6. `service mysqld restart`[CentOS]


