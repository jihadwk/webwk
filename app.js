var express = require('express');
var app = express();
/**
 * 静态资源目录配置 /static 可配置的虚拟路径
 */
//app.use(express.static(__dirname+'/public'));
app.use('/static', express.static(__dirname + '/public'));
/**
 * 使项目支持html模板，使用和ejs模板一样
 */
var ejs = require('ejs');
app.engine('.html',ejs.__express);
//设置模版引擎
app.set('view engine','html');
//设置模版文件所在目录
app.set('views','./views');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}