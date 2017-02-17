/**
 * 前台网站路由配置
 */
var Index = require('../controller/web/index');
module.exports = function(app){
    app.get('/',Index.index);
}