'use strict';

var _http = require('http');var _http2 = _interopRequireDefault(_http);
var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _mime = require('mime');var _mime2 = _interopRequireDefault(_mime);
var _connect = require('connect');var _connect2 = _interopRequireDefault(_connect);


var _logger = require('./logger');var _logger2 = _interopRequireDefault(_logger);
var _admin = require('./admin');var _admin2 = _interopRequireDefault(_admin);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//connect中间件组件是一个函数，他拦截HTTP服务器提供得请求和相应对象，执行逻辑然后或者结束响应，或者把它传递给下一个中间件组件。Connect用分排期把中间件'连接'在一起
// 业务逻辑
var app = (0, _connect2.default)();
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// 日志中间件
app.use((0, _logger2.default)(':method :url'));
// app.use('/',restrict);
// admin 服务器挂载
app.use('/admin', restrictAccess).
use('/admin', _admin2.default.main);

// 服务器启动
app.listen('3006', function () {
    console.log('server listening on port 3006');
});



// 登录认证中间件  确保访问页面得是有效用户
function restrictAccess(req, res, next) {
    // var authorization=req.headers.authorization;
    // if(!authorization)return next(new Error('Unauthorized'));

    // var parts=authorization.split('');
    // var scheme=parts[0];
    // var auth=new Buffer(parts[1],'base64').toString().split(':');
    // var user=auth[0];
    // var pass=auth[1];  

    res.setHeader("Access-Control-Allow-Origins", "*"); // 允许跨域
    //告诉浏览器编码方式  
    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    next();
    // authenticateWithDataBase(user,pass,function(err){
    //      if(err) return next(err);
    //      next();
    //  });

}

var routes = {
    GET: {
        '/users': function users(req, res) {
            console.log('ss');
            res.end('tobi,loki');
        },
        '/user/:id': function userId(req, res, id) {

        } } };
//# sourceMappingURL=server.js.map