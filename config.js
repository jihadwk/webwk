/**
 * 配置／设置。。。
 */
module.exports = {
    redis_host:'localhost',
    redis_port:6379,
    redis_pass:'',//redis认证密码
    session_ttl:1800,//session的过期时间 单位是 秒
    //项目运行模式
    debug:true,
    //mongodb地址
    mongodb:"mongodb://localhost/webwk",
    //加密密钥(密码加密)
    encrypt_key:'webwk/scdm',
    //网页标题
    title:'CMS后台管理'
}