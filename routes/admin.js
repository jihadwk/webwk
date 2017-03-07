/**
 * 管理后台路由配置
 */
var Admin = require('../controller/admin/admin');
module.exports = function(app){
    app.get('/login.html',Admin.login);
    app.get('/index.html',Admin.index);

    app.post('/signIn',Admin.signIn);
    app.post('/signUp',Admin.signUp);
}