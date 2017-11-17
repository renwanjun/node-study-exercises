// 登录认证中间件  确保访问页面得是有效用户
function restrictAccess(req,res,next){
    // var authorization=req.headers.authorization;
    // if(!authorization)return next(new Error('Unauthorized'));

    // var parts=authorization.split('');
    // var scheme=parts[0];
    // var auth=new Buffer(parts[1],'base64').toString().split(':');
    // var user=auth[0];
    // var pass=auth[1];  
    
    res.setHeader("Access-Control-Allow-Origin", "*");  // 允许跨域
    //告诉浏览器编码方式  
    res.setHeader("Content-Type","text/html;charset=UTF-8" ); 
    next();
    // authenticateWithDataBase(user,pass,function(err){
    //      if(err) return next(err);
    //      next();
    //  });

}

function test(req,res,next){
    res.setHeader('Content-Type','text/plain');
    res.end('hello world');
}

export default {
    main (req,res,next) {
        switch(req.url) {
            case '/login':
            test(req,res,next);
            break;
            case '/':
            default:
            res.end('try /login');
        }
    }
}