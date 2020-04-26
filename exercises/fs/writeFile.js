const fs=require('fs')
// const {file2}=require('./path')
var writeFilePromise=function(file,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,content,(err,data)=>{
            if(err) return reject(err);
            resolve(data)
        })
    })
}
var content={
    a:'hello',
    b:[1,2,3],
    [Symbol()]:'xixi'
}
writeFilePromise('./db/hello.json',JSON.stringify(content)).then(data=>{
    console.log(`写文件成功`)
}).catch(err=>{
    console.error(`写文件失败${err}`)
})

fs.writeFile('./db/message.txt', '这是第一行',function(err){
    if(err) console.log('写文件操作失败');
    else console.log('写文件操作成功');
});
