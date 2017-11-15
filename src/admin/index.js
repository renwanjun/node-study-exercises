export default {
    admin (req,res,next) {
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