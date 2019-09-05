

export default function(format){
    const regexp=/ :(\w+) /g
    return function (req,res,next){
        let str = format.replace(regexp,(match,property)=>{req[property]})
        console.log('ddd')
        console.log(format)
        console.log(str);
        next();
    }
}