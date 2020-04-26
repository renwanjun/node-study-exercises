var fs=require('fs')
// var {file1}=require('./path')

fs.open('./db/writeFile.txt','w+',(err,fd)=>{
    if(err) throw err
    var writeBuffer=new Buffer.from('I love you'),
    bufferLength=writeBuffer.length
    fs.write(fd,writeBuffer,0,bufferLength,null,(err,written)=>{
        if(err) throw err;
        console.log(`write ${written} bytes`)
    })
    // 同步写入
    // fs.writeSync(fd,new Buffer.alloc('Do you love me?'),0,100,0)
})