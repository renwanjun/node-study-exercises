const msg="hello,wolrd1"


function fn1(){
    return new Promise((resolve,reject)=>{
        // resolve('success')
        reject('fail')
    }).catch((err)=>{
        console.log(err)
    })
}

async function hello(){
    console.log(msg+'2')
    const result=await fn1()
    console.log(result)
    const result2=await 3+4
    console.log(result2)
}


hello()
console.log(msg)
module.exports=msg