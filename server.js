'use strict'
console.log(12)
import http from 'http';
import fs from 'fs';
import path from 'path';
import mime from 'mime';
import connect from 'connect';

const app=connect();
app.use(logger);
// app.use('/',restrict);
app.use('/admin',restrict); // 路由
app.use('/admin',admin);

app.listen('3006',function(){
    console.log('server listening on port 3006')
})

// logger中间件--打日志
function logger(req,res,next){
    console.log('%s %s',req.method,req.url);
    next();
}
function test(req,res,next){
    res.setHeader('Content-Type','text/plain');
    res.setHeader("Access-Control-Allow-Origin", "*");  // 允许跨域
    //告诉浏览器编码方式  
    res.setHeader("Content-Type","text/html;charset=UTF-8" ); 
    res.end('hello world');
}

function restrict(req,res,next){
    // var authorization=req.headers.authorization;
    // if(!authorization)return next(new Error('Unauthorized'));

    // var parts=authorization.split('');
    // var scheme=parts[0];
    // var auth=new Buffer(parts[1],'base64').toString().split(':');
    // var user=auth[0];
    // var pass=auth[1];
    next();
    // authenticateWithDataBase(user,pass,function(err){
    //      if(err) return next(err);
    //      next();
    //  });

}
function admin(req,res,next){
    switch(req.url){
        case '/login':
        test(req,res,next);
        break;
        case '/':
        default:
        res.end('try /login');
    }
}