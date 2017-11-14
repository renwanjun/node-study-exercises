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


var app = (0, _connect2.default)();
app.use(logger);
app.use('/admin', restrict);
app.use('/admin', admin);

app.listen('3006', function () {
    console.log('server listening on port 3006');
});

// logger中间件--打日志
function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}
function test(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}

function restrict(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) return next(new Error('Unauthorized'));

    var parts = authorization.split('');
    var scheme = parts[0];
    var auth = new Buffer(parts[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    next();
    // authenticateWithDataBase(user,pass,function(err){
    //      if(err) return next(err);
    //      next();
    //  });
}
function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('try /login');
            break;
        case '/login':
            test(req, res, next);
            break;
        default:
    }
}
//# sourceMappingURL=server.js.map