# webwk
express+mongodb+layui(easyui bootstrap)

http协议自身无状态
cookie和session都能解决这个问题,cookie是将状态数据保存在客户端，session则是将状态数据保存在服务端
session存储方式
express-session:内存存储方式，sails内部集成的就是这个
connect-mongo:使用mongodb存储session
connect-redis:使用redis做缓存层来持久化session，速度比mongodb更快
shortid:生成短ID

