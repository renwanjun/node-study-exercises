'use strict'

import http from 'http';
import fs from 'fs';
import path from 'path';
import mime from 'mime';
import connect from 'connect';

// 业务逻辑
import logger from './logger'
import admin from './admin'

//connect中间件组件是一个函数，他拦截HTTP服务器提供得请求和相应对象，执行逻辑然后或者结束响应，或者把它传递给下一个中间件组件。Connect用分排期把中间件'连接'在一起

const app=connect();
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// 日志中间件
app.use(logger(':method :url'));
// app.use('/',restrict);
// admin 服务器挂载
app.use('/admin',restrictAccess) 
   .use('/admin',admin.main);

// 服务器启动
app.listen('3006',function(){
    console.log('server listening on port 3006')
})



// 登录认证中间件  确保访问页面得是有效用户
function restrictAccess(req,res,next){
    // var authorization=req.headers.authorization;
    // if(!authorization)return next(new Error('Unauthorized'));

    // var parts=authorization.split('');
    // var scheme=parts[0];
    // var auth=new Buffer(parts[1],'base64').toString().split(':');
    // var user=auth[0];
    // var pass=auth[1];  
    
    res.setHeader("Access-Control-Allow-Origins", "*");  // 允许跨域
    //告诉浏览器编码方式  
    res.setHeader("Content-Type","text/html;charset=UTF-8" ); 
    next();
    // authenticateWithDataBase(user,pass,function(err){
    //      if(err) return next(err);
    //      next();
    //  });

}

const routes={
    GET:{
        '/users':function(req,res){
            console.log('ss')
            res.end('tobi,loki')
        },
        '/user/:id':function(req,res,id){

        }
    }
}