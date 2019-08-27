# GoAccess使用指北

## 安装

```shell
yum install goaccess
```

## 启动

1. 跳转到 `nginx/logs`目录

2. 使用命令将`report.html`输出到 `nginx/html`目录下

    - 实时版本

      ```shell
      goaccess access.log -o ../html/report.html --log-format=COMBINED --real-time-html
      ```

    - 静态版本

      ```shell
      goaccess access.log -o ../html/report.html --log-format=COMBINED
      ```

3. 配置 `nginx.conf`

    ```nginx
    http {
        server {
            listen 1234;
            location /report.html {
                alias html/report.html;
            }
        }
    }
    ```

4. 最后打开`xx.xxx.xxx.xx：1234/report.html`就可以访问`GoAccess`了

