/**
 * 管理后台路由配置
 */
var Admin = require('../controller/admin/admin');
module.exports = function(app){
    app.get('/login',Admin.login);
}