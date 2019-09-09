# HTTP升级HTTPS TODO

1. 下载 `certbot-auto`

   ```bash
   wget https://dl.eff.org/certbot-auto
   ```

2. 设置为可执行权限

   ```bash
   chmod u+x certbot-auto
   ```

3. 申请证书

   ```bash
   ./certbot-auto certonly  -d "*.emotionl.fun" --manual --preferred-challenges dns-01  --server https://acme-v02.api.letsencrypt.org/directory
   ```

   

