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
手机App前后台登录验证实现问题？  
       假设手机App有用户登录的功能，用户在App客户端输入帐号登录后，App请求后台登录接口进行登录，后台验证后保存用户登录信息（假设为Session）并返回给客户端，App客户端接到登录成功后存储用户名/密码简单信息。 
      
       但是我想后台接口保存用户登录信息会有过期问题， 如果App客户端过半天或几天后，再去下订单或提交其他数据到后台， 后台验证登录信息过期了，那怎么办？？？ 返回过期让客户端强制用户登录？ 还是自动让客户端再提交用户名/密码重新登录？？              
       
       不知道我的问题描述清楚没有，我的问题是：              
       1、一般电商App或涉及用户登录的App，对登录过期是怎么处理的？ 
       2、由于是App，后台登录后用户登录信息肯定用不了cookie或session，那如何存储？ 自己设计或基于缓存实现？？  有什么简便而且灵活的方案？？？              
这个和你普通Web应用一样的，App也可以用Cookie。你只要在登陆成功后在App里保存下来服务器端返回来的cookie，然后每次App发http请求时带上这个cookie就可以了，服务器端检查cookie，如果过期了，就返回错误码让客户端处理就行了。

直接存储cookies 就可以了 不过记得要加密

完全退出后再重新打开，或者多天之后再打开应用时，可以尝试自动登录，如果没有在别处登录过，就允许自动登录，像微信一样。  
也可以弹出登录界面让用户用手势密码登录，如果不是长时间没有登录过（如半个月），就可以仅凭手势密码登录（类似于记住密码的功能），如果发现长时间没有登录，则弹出用户名/密码界面让用户输入密码登录。如招行客户端、翼支付客户端。  
也有应用，手势密码只用在离开应用（如锁屏或切换应用）后重新返回时的安全校验，类似于windows屏保或锁屏后的返回密码。而不用它来自动登录应用。如支付宝客户端。  
 

