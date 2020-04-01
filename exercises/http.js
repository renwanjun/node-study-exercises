/**
 * HTTP服务器
 */
var http = require('http');
var util = require('util')
var fs = require('fs')
require('./es6-extent')

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
            getFile('read.txt')
            break;
        case '/':
        default:
            // 回复内容 
            res.write('Hello,world');

    }
    // console.log(req.url)
    // res.end(util.inspect(req.headers));
}).then(content=>{
    console.log(content)
}).catch(err=>console.log(err))
.finally(()=>{
    console.log('finally')
})
.done(()=>{
    console.log('done')
})

function getFile(name) {
    return new Promise((resolve, reject) => {
        fs.open(`${__dirname}/${name}`, 'r', function (err, fd) {
            if (err) throw err;
            var readBuffer = Buffer.alloc(1024),
                bufferOffset = 0,
                bufferLength = readBuffer.length,
                filePosition = 1
            fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function (err, readBytes) {
                if (err) throw err;
                //console.log(`just read ${readBytes} bytes`)
                if (readBytes > 0) {
                    console.log(readBuffer.slice(0, readBytes))
                }
                resolve(readBuffer)
            })
        })
    })
}

/**
 * 简写形式
 */
// require('http').createServer(function(req,res){
//     // 写入http响应状态码和响应头
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     // 回复内容
//     res.write('Hello,world');
// }).listen(4000)