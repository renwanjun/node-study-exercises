
/**
 * @tutorial
 * 文件打开、写入、读取、关闭练习
 */
var  fs=require('fs')
var util=require('util')

const f1='/read.txt'

/**
 * 查询文件或者目录的信息
 */
fs.stat(`${__dirname}`,function(err,stats){
    if(err){
        throw err;
    }
    console.log(stats.isDirectory())
    // util.log(stats.isDirectory())
})

/**
 *fs.open 打开一个文件并读取,将读取内容保存为二进制形式
 *
 * 'r': 以读取模式打开文件，并且自文件开头开始读取数据
 * 'r+'：以读写模式打开文件，并且自文件开头开始读取数据和写入数据
 * 'w'
 * 'w+'
 * 'a'
 * 'a+'
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