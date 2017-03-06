/**
 * 后台处理
 */

var common = require('../../util/common');
var config = require('../../config');
var validator = require('validator');
var AdminUser = require('../../model/AdminUser');
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
        var newPsd = common.encrypt(password,config.encrypt_key);
        var captcha = req.body.captcha;
        if(common.compareString(req.session.captcha,captcha)){
            if(validator.isUserName(username) && validator.isPsd(password)){
                AdminUser.findOne({username:username,password:newPsd}).populate('group').exec(function(err,user){
                    if(err){
                        return res.end(err);
                    }
                })
            }
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