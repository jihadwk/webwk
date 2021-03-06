var config = require('../config');
var mongoose = require('mongoose');
var log = require('./logger').logger;
//mongoose内置的Promise已声明不可用，使用es6 自带的Promise
// mongoose.Promise = global.Promise;
//使用bluebird
var bluebird = require('bluebird');
mongoose.Promise = bluebird;
mongoose.connect(config.mongodb);

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {    
    log.info('Mongoose connection open to ' + config.mongodb);  
});    

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    log.error('Mongoose connection error: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    log.warn('Mongoose connection disconnected');  
});    