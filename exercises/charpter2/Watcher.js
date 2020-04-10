/**
 * 
 */
const fs=require('fs')
const events=require('events')
class Watcher extends events.EventEmitter{
    constructor(watchDir,processDir){
        super()
        Object.assign(this,{watchDir,processDir})
    }
    // 处理watch目录中的所有文件
    watch(){
        fs.readdir(this.watchDir,(err,files)=>{
            if(err)throw err;
            for(let index in files){
                this.emit('process',files[index])
            }
        })
    }
    // 添加开始监控的方法
    start(){
        fs.watchFile(this.watchDir,()=>{
            this.watch()
        })
    }
}
module.exports=Watcher