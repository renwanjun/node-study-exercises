const fs=require('fs')

const f1='/read.txt'
fs.stat(`${__dirname}${f1}`,function(err,stats){
    if(err){
        throw err;
    }
    console.log(stats.size)
})

/**
 * 打开一个文件并读取
 */
fs.open(`${__dirname}${f1}`,'r',function(err,fd){
    if(err){
        throw err;
    }
    var readBuffer=Buffer.alloc(1024),
    bufferOffset=0,
    bufferLength=readBuffer.length,
    filePosition=1
    fs.read(fd,readBuffer,bufferOffset,bufferLength,filePosition,function(err,readBytes){
        if(err)throw err;
        console.log(`just read ${readBytes} bytes`)
        if(readBytes>0){
            console.log(readBuffer.slice(0,readBytes))
        }
    })
})

/**
 * 文件写入
 */
fs.open('test.log','a',function(err,fd){
    const writeBuffer=Buffer.from('writing this string'),
    bufferOffset=0,
    bufferLength=writeBuffer.length,
    filePosition=null;
    fs.write(
        fd,
        writeBuffer,
        bufferOffset,
        bufferLength,
        filePosition,
        function(err,written){
            if(err)throw err;
            console.log(`write ${written} bytes`)
        }
    )
})

fs.close()