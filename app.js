var express = require('express');
var app = express();
/**
 * 静态资源目录配置 /static 可配置的虚拟路径
 */
//app.use(express.static(__dirname+'/public'));
app.use('/static', express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.send('Hello World!');
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}