var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var logger = require('morgan');
// var log4js = require('log4js');
// log4js.configure('./config/log4js.json');
var logger = require('./util/logger');
require('./util/db');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var config = require('./config');
/**
 * 静态资源目录配置 /static 可配置的虚拟路径
 */
//app.use(express.static(__dirname+'/public'));
app.use('/static', express.static(path.join(__dirname,'public')));
//设置模版文件所在目录
app.set('views',path.join(__dirname,'views'));
/**
 * 使项目支持html模板，使用和ejs模板一样
 */
var ejs = require('ejs');
app.engine('.html',ejs.__express);
//设置模版引擎
app.set('view engine','html');
//http日志 中间件
// app.use(logger('dev'));
// app.use(log4js.connectLogger(log4js.getLogger('logInfo'),{level:'auto'}));
// app.use(log4js.connectLogger(log4js.getLogger('logInfo')));
logger.use(app);
/**
 * 解析请求参数生成req.body req.cookies
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
/**
 * session存储到redis,如果redis没开，则req对象里没有session对象，在redis里以字符串方式存储，键为sess:sessionID,值为{cookie:{maxAge:xx,httpOnly:true,path:'/'}}
 */
app.use(session({
  store:new RedisStore({
    port:config.redis_port,
    host:config.redis_host,
    pass:config.redis_pass,
    ttl:config.session_ttl
  }),
  secret:'webwk',
  resave:true, //重新保存session
  saveUninitialized:true //新加session保存
}))
// app.get('/', function (req, res) {       
//   res.send('Hello World!');
// });
//好像是配置策略
// var router = express.Router();
// router.use('/admin',function(req,res,next){

//   next();
// })
// app.use('/admin',router);

//路由配置
//前台
require('./routes/index')(app);

//添加中间件,判断后台是否已登陆(相当于策略)
app.use(function(req,res,next){
  if(!req.session.user){
    if(req.url=='/login'||req.url=='/register'){
      next();
    }else{
      res.redirect('/login');
    }
  }else{
    next();
  }
})
//后台
require('./routes/admin')(app);

//若是以上路由均不满足，则是404
app.use(function(req,res,next){
  var err = new Error('not found');
  err.status = 404;
  next(err);
});

//显示错误页面
app.use(function(err,req,res){
  res.status(err.status||500);
  res.render('website/index/error',{
    message:err.message,
    error:err
  })
})

if (!module.parent) {
  app.listen(3000);
  logger.logger.info('Express started on port 3000');
}