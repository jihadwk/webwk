var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var config = require('./config');
/**
 * 静态资源目录配置 /static 可配置的虚拟路径
 */
//app.use(express.static(__dirname+'/public'));
app.use('/static', express.static(path.join(__dirname,'public')));
//设置模版文件所在目录
app.set('views',path.join(__dirname+'views'));
/**
 * 使项目支持html模板，使用和ejs模板一样
 */
var ejs = require('ejs');
app.engine('.html',ejs.__express);
//设置模版引擎
app.set('view engine','html');
//http日志
app.use(logger('dev'));
/**
 * 解析请求参数生成req.body req.cookies
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
/**
 * session存储到redis
 */
app.use(session({
  store:new RedisStore({
    port:config.redis_port,
    host:config.redis_host,
    pass:config.redis_pass,
    ttl:config.session_ttl
  }),
  secret:'wwwwkkk',
  resave:true, //重新保存session
  saveUninitialized:true //新加session保存
}))

app.get('/', function (req, res) {              
  res.send('Hello World!');
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}