# webwk
多打两个空格换行  
express+mongodb+layui(easyui bootstrap)  
http协议自身无状态  
cookie和session都能解决这个问题,cookie是将状态数据保存在客户端，session则是将状态数据保存在服务端  
session存储方式  
express-session:内存存储方式，sails内部集成的就是这个  
connect-mongo:使用mongodb存储session  
connect-redis:使用redis做缓存层来持久化session，速度比mongodb更快  
shortid:生成短ID 
layui 像easyUI一样有丰富的组件可以使用，又像angularjs一样代码可以模块化  
webfont 在线字体 icon  @font-face引入  
https://github.com/chriso/validator.js validator库 字符串验证，已经写了很多正则，  
例如isEmail ,isIP,也可以方便的扩展，validator.extend('name',function(str){}))(低版本可以扩展，高版本不能扩展了)
 

