# OpenResty集成Lua代码

```nginx
worker_processes 1;
events {
    worker_connections 1024;
}
http {
    include mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    server {
        listen 443 ssl;
        server_name jazz.emotionl.fun;
        location /lua {
            default_type text/html;
            #---Lua Code---
            content_by_lua '
                ngx.say("User-Agent: ", ngx.req.get_headers()["User-Agent"])
                ';
            #---Lua Code---
        }
        location = /50x.html {
            root html;
        }
        error_page 500 502 503 504  /50x.html;
    }
}

```

