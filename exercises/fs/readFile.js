const fs=require('fs')
const {file2}=require('./path')
var readFilePromise=function(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,'utf-8',(err,data)=>{
            if(err) return reject(err);
            resolve(data)
        })
    })
}
readFilePromise(file2).then(data=>{
    console.log('success  ',data)
}).catch(err=>{
    console.error('error',err)
})