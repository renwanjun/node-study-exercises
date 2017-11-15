

export default function(format){
    const regexp=/ :(\w+) /g
    return function (req,res,next){
        // var str = format.replace(regexp,function(match,property){
        //     return req[property];
        // })

        var str = format.replace(regexp,function(match,property){
            return req[property];
        })
        console.log(str);
        next();
    }
}