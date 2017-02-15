var config = require('../config');
var log4js = require('log4js');
log4js.configure('./config/log4js.json');
var dateFilelog = log4js.getLogger('logInfo');
var consoleLog = log4js.getLogger('console');
var logger;
if(config.debug){
    logger = consoleLog;
}else{
    logger = dateFilelog;
}
exports.logger = logger;
exports.use = function(app){
    // app.use(log4js.connectLogger(logger,{level:'INFO',format:':method :url'}));
    app.use(log4js.connectLogger(logger,{level:'auto'}));
}