# GoAccess使用指北

## 安装

```bash
yum install goaccess
```

## 启动

1. 跳转到 `nginx/logs`目录

2. 使用命令将`report.html`输出到 `nginx/html`目录下

    - 实时版本

      ```bash
      goaccess access.log -o ../html/report.html --log-format=COMBINED --real-time-html
      ```

    - 静态版本

      ```bash
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

## 使用 crontabs 定时更新

1. 编写更新 `goaccess`的脚本

   ```bash
   #!/bin/bash
   goaccess /home/nginx/logs/access.log -o /home/nginx/html/report/index.html --log-format=COMBINED
   echo -e "update success"
   ```

2. `yum install crontabs`安装 `crontabs`

3. `crontab -e`配置定时任务

   贴入以下配置，保存即可

   ```bash
   0 0 * * * /common_shell/update_goaccess.sh
   ```

> [CRON可视化工具](https://crontab.guru/)
>
> [Linux/Mac Tutorial: Cron Jobs - How to Schedule Commands with crontab](https://www.youtube.com/watch?v=QZJ1drMQz1A)