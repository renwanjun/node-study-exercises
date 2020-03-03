/**
 * HTTP客户端 
 * 使用http模块发送http请求
 */
const http=require('http')

// const options={
//     host:'www.google.com',
//     port:80,
//     path:'/index.html'
// };

const options={
    host:'http://127.0.0.1',
    port:4001,
    path:'/'
};

http.get(options,function(res){
    console.log(`got response code ${res.statusCode}`)
}).on('error',function (err) {
    console.log(`got error ${err.message}`)
})