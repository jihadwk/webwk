/**
 * 管理后台路由配置
 */
var Admin = require('../controller/admin/admin');
module.exports = function(app){
    app.get('/login.html',Admin.login);
    app.get('/index.html',Admin.index);
    app.get('/main.html',Admin.main);
    app.get('/personInfo.html',Admin.personInfo);
    app.get('/mylogInfo.html',Admin.mylogInfo);
    app.get('/changePwd.html',Admin.changePwd);

    app.post('/signIn',Admin.signIn);
    app.post('/signUp',Admin.signUp);
    app.get('/logout',Admin.logout);
}