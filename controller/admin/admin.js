/**
 * 后台处理
 */
module.exports = {
    /**
     * 登录页面
     */
    login:function(req,res){
        res.render('admin/login');
    },
    /**
     * 登录逻辑
     */
    signIn:function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        var captcha = req.body.captcha;
        if(req.session.captcha == captcha){

        }else{
            //验证码错误
            return res.json({'status':'captcha error'});
        }
    },
    /**
     * 注册
     */
    signUp:function(req,res){
        
    }
}