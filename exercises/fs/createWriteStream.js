var fs = require('fs');
var file = fs.createReadStream('./db/message.txt');
var out = fs.createWriteStream('./db/anotherMessage.txt');
file.on('data',function(data){
    out.write(data+'copy');
});
out.on('open',function(fd){
    console.log('需要被写入的文件已打开');
});
file.on('end',function(){
    //将操作系统缓存区中的数据全部写入文件
    out.end('再见朋友',function(){
        console.log('文件全部写入完毕');
        console.log('共写入'+out.bytesWritten+'数据');
    });
});

