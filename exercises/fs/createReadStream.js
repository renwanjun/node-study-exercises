var fs = require('fs');
var readStream = fs.createReadStream('./db/message.txt',{start:3,end:12});
readStream.on('open',function(fd){
    console.log('开始读取文件');
});
readStream.on('data',function(data){
    console.log('读取到数据：');
    console.log(data);
});
readStream.on('end',function(){
    console.log('文件已全部读取完毕');
});
readStream.on('close',function(){
    console.log('文件被关闭');
});
readStream.on('error',function(err){
    console.log('读取文件失败');
});