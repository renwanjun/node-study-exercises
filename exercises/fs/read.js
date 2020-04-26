var fs=require('fs')
var {file1}=require('./path')
fs.open(file1,'r',(err,fd)=>{
    if(err) throw err
    var readBuffer=new Buffer.alloc(1024),
    bufferOffset=0,
    bufferLength=readBuffer.length,
    filePosition=0;
    fs.read(fd,readBuffer,bufferOffset,bufferLength,filePosition,(err,readBytes)=>{
        if(err) throw err
        console.log(`just read ${readBytes} bytes`)
        if(readBytes>0)console.log(readBuffer.slice(0,readBytes),readBuffer.toString())
    })
    
    // 同步读取
    var readBufferSync=new Buffer.alloc(255)
    fs.readFileSync(fd,readBuffer,0,100,null)
    console.log(`just sync read ${readBytesSync} bytes \n`)
})