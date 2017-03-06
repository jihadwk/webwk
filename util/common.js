/**
 * 常用方法
 */

//加密类
var crypto = require('crypto');
module.exports = {
    /**
     * 比较字符串，不区分大小写
     */
    compareString:function(str1,str2){
        if(str1.toLowerCase() == str2.toLowerCase()){
            return true;
        }else{
            return false;
        }
    },
    /**
     * 加密
     */
    encrypt:function(data,key){
        var cipher = crypto.createCipher("bf",key);
        var newPsd = "";
        newPsd += cipher.update(data,"utf8","hex");
        newPsd += cipher.final("hex");
        return newPsd;
    },
    /**
     * 解密
     */
    decrypt:function(data,key){
        var decipher = crypto.createDecipher("bf",key);
        var oldPsd = "";
        oldPsd += decipher.update(data,"hex","utf8");
        oldPsd += decipher.final("utf8");
        return oldPsd;
    }
}