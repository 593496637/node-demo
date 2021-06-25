# express源码解读

## 调用express() 到底创建的是什么

  > 调用的是createApplication函数
  > ![avatar](files/images/express1.png)

## app.listen()启动服务器
- 如何可以结合原生来启动服务器
- express->http.createServer.listen
  > ![avatar](files/images/express2.png)