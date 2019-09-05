# 初识Nginx

## 5个优点
- 高并发
- 可扩展性好
- 高可靠性
- 热部署
- BSD许可证

## 组成部分
1. Nginx二进制可执行文件（由模块源码编译出的一个文件）
2. Nginx.conf配置文件（控制Nginx的行为）
3. access.log访问日志（记录每一条http请求信息）
4. error.log错误日志（定位问题）

## 编译出适合自己的Nginx
### 下载

```bash
wget https://nginx.org/download/nginx-1.16.1.tar.gz
tar -xzf nginx-1.16.1.tar.gz 
```

### 介绍各目录

进入解压后的目录

```javascript
- auto
- CHANGES
- CHANGES.ru
- conf
- configure
- contrib
- html
- LICENSE
- man
- README
- src
```

配置Vim高亮显示Nginx语法（把`contrib`目录下的文件复制到`~/.vim`目录下）

1. `mkdir ~/.vim`
2. `cd nginx-1.16.1`
3. `cp -r contrib/vim/* ~/.vim`

### Configure

```bash
./configure --help | more
```

### 中间件介绍
### 编译 

1. `./configure --prefix=/home/nginx`
2. `make`
3. `make install`

> 关于 objs 目录
>
> 做nginx版本升级时 需要把objs目录复制到安装目录中

### 安装

## Nginx 配置语法

1. 配置文件由指令与指令块构成
2. 每条指令以；分号结尾，指令与参数间以空格符号分隔
3. 指令块以｛｝大括号将多条指令组织在一起
4. 使用#符号添加注释，提高可读性
5. include语句允许组合多个配置文件以提升可维护性
6. 使用$符号使用变量
7. 部分指令的参数支持正则表达式

> 配置参数：时间的单位
>
> | 单位 | 含义 |
> | ---- | ---- |
> | ms   | 毫秒 |
> | s    | 秒   |
> | m    | 分   |
> | h    | 小时 |
> | d    | 天   |
> | w    | 周   |
> | M    | 月   |
> | y    | 年   |
>
> 配置参数：空间的单位
>
> | 单位 | 含义      |
> | ---- | --------- |
> |      | bytes     |
> | k/K  | kilobytes |
> | m/M  | megabytes |
> | g/G  | gigabytes |
>
> http配置的指令块
>
> - http
> - server
> - location
> - upstream

## Nginx 命令行

1. 格式：nginx -s reload
2. 帮助：-? -h
3. 使用指定的配置文件：-c
4. 指定配置指令：-g
5. 指定运行目录：-p
6. 发送信号：-s
   - 立刻停止服务：stop
   - 优雅的停止服务：quit
   - 重载配置文件：reload
   - 重新开始记录日志文件：reopen
7. 测试配置文件是否有语法错误：-t -T
8. 打印nginx的版本信息、编译信息等：-v -V

| 命令                   | 作用              |
| ---------------------- | ----------------- |
| ./sbin/nginx           | 启动Nginx         |
| ./sbin/nginx -s reload | 重载Nginx配置文件 |



