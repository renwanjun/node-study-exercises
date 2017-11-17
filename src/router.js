import parse from 'parse';

export default (obj)=>{
    return function (req,res,next){
        if (!obj[req.methosd]) {  // 检查以确保req.method定义了
            next();
            return;
        }

        let routes = obj[req.method]
        let url = parse(req.url)
        let paths = Object.keys(routes)

    }
}