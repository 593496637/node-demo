# session/cookie 的缺点
- cookie会被附加在每个HTTP请求中，所以无形中增加了流量（事实是某些请求是不需要的）
- cookie是明文传递的，不安全
- cookie大小限制再4kb，对于复杂的需求来说是不够的
- 对于浏览器外的其他客户端（比如iOS/Android），必须手动的设置cookie和session
- 对于分布式系统和服务器集群中如何可以保证其他系统也可以正确的解析session