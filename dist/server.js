'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

var _connect = require('connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(12);


// 业务逻辑
// import admin from './src/admin/index'

//connect中间件组件是一个函数，他拦截HTTP服务器提供得请求和相应对象，执行逻辑然后或者结束响应，或者把它传递给下一个中间件组件。Connect用分排期把中间件'连接'在一起

var app = (0, _connect2.default)();
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });


app.use(logger);
// app.use('/',restrict);
// 服务器挂载
app.use('/admin', restrictAccess).use('/admin', admin);

app.listen('3006', function () {
    console.log('server listening on port 3006');
});

// logger中间件--记录请求日志
function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}
function test(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}

// 登录认证中间件  确保访问页面得是有效用户
function restrictAccess(req, res, next) {
    // var authorization=req.headers.authorization;
    // if(!authorization)return next(new Error('Unauthorized'));

    // var parts=authorization.split('');
    // var scheme=parts[0];
    // var auth=new Buffer(parts[1],'base64').toString().split(':');
    // var user=auth[0];
    // var pass=auth[1];  

    res.setHeader("Access-Control-Allow-Origin", "*"); // 允许跨域
    //告诉浏览器编码方式  
    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    next();
    // authenticateWithDataBase(user,pass,function(err){
    //      if(err) return next(err);
    //      next();
    //  });
}
function admin(req, res, next) {
    switch (req.url) {
        case '/login':
            test(req, res, next);
            break;
        case '/':
        default:
            res.end('try /login');
    }
}

// 创建可配置得中间件
function setup(options) {
    // 这是逻辑

    // 此闭包做中间件得初始化
    return function (req, res, next) {
        // 中间逻辑
    };
}
//# sourceMappingURL=server.js.map