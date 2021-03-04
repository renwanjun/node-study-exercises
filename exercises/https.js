var https=require('https'),
fs=require('fs')
// 提供私有key和包含证书信息的字符串
var options={
    key:fs.readFileSync('./server/my_key.pem'),
    cert:fs.readFileSync('./server/my_cert.pem')
}
// 调用https的方法createServer
https.createServer(options,function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('hello world')
}).listen(443)