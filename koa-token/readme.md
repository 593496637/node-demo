## 颁发签名，采用非对称加密。公钥私钥的生成
### 第一步
- 打开git hash，输入openssl
- 私钥：genrsa -out private.key 1024
- 公钥：rsa -in private.key -pubout -out public.key