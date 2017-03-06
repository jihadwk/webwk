var common = require('./util/common');
var key = 'wukaiss';
var str_encrypt = common.encrypt('123456',key);
console.log('加密后字符串:',str_encrypt);
var str = common.decrypt(str_encrypt,key);
console.log('解密后字符串:',str);