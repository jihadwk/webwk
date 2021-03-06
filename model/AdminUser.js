/**
 * 管理员对象
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var log = require('../util/logger').logger;
var AdminGroup = require('./AdminGroup');
var AdminUserSchema = new Schema({
    _id:{
        type:String,
        unique:true,
        'default':shortid.generate
    },
    name:String,
    userName:String,
    email:String,
    password:String,
    phoneNum:String,
    comments:String,
    date:{
        type:Date,
        default:Date.now
    },
    logo:{
        type:String,
        default:'/upload/images/defaultlogo.png'
    },
    auth:{
        type:Boolean,
        default:false
    },
    group:{
        type:Schema.Types.ObjectId,
        ref:'AdminGroup'
    }
    
});
/**
 * 实例方法
 */
AdminUserSchema.methods.say = function(){
    return log.info('my name is '+this.userName);
}

/**
 * 静态方法
 */
AdminUserSchema.statics.findByPhoneNum = function(phoneNum,callback){
    return AdminUser.find({phoneNum:phoneNum},callback);
}
/**
 * 发布model
 */
var AdminUser = mongoose.model('AdminUser',AdminUserSchema);
module.exports = AdminUser;