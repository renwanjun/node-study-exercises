/**
 * HTTP服务器
 */
var http = require('http');
var util = require('util')


function createServer(port) {
    return new Promise((resolve, reject) => {
        // 调用createServer服务器方法，创建一个http服务器
        var server = http.createServer();
        // 监听request事件
        server.on('request', function (req, res) {
            resolve({ req, res })
        })
        server.listen(port);
    })
}
let server = createServer(4001)
server.then(({ req, res }) => {
    // 写入http响应状态码和响应头
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    switch (req.url) {
        case '/getFile':
            // 用二进制回复内容
            res.write(Buffer.from('sss'));
            break;
        case '/':
        default:
            // 回复内容
            res.write('Hello,world');

    }
    console.log(req.url)
    res.end(util.inspect(req.headers));
})


/**
 * 简写形式
 */
// require('http').createServer(function(req,res){
//     // 写入http响应状态码和响应头
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     // 回复内容
//     res.write('Hello,world');
// }).listen(4000)