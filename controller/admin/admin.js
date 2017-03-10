/**
 * 后台处理
 */

var common = require('../../util/common');
var config = require('../../config');
var validator = require('validator');
var AdminUser = require('../../model/AdminUser');
var SystemOptionLog = require('../../model/SystemOptionLog');
var log = require('../../util/logger').logger;
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
            if(username && password){
                AdminUser.findOne({userName:username,password:newPsd}).populate('group').exec(function(err,user){
                    if(err){
                        return res.end(err);
                    }
                    if(user){
                        // req.session.adminPower = user.group.power;
                        req.session.adminlogined = true;
                        req.session.adminUserInfo = user;
                        //存入操作日志
                        SystemOptionLog.addUserLoginLogs(req,res,common.getClienIp(req));
                        res.json({ret:1});
                    }else{
                        log.info("登录失败");
                        res.json({ret:0,msg:"用户名或密码错误"});
                    }
                })
            }else{
                res.json({ret:2,msg:'非法参数'});
            }
        }else{
            //验证码错误
            return res.json({ret:3,msg:'验证码错误'});
        }
    },
    /**
     * 注册
     */
    signUp:function(req,res){
        
    },
    /**
     * 主页
     */
    index:function(req,res){
        res.render('admin/index');
    },
    /**
     * 首页
     */
    main:function(req,res){
        res.render('admin/main');
    }
}