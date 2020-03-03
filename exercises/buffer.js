/**
 * Node提供二进制方法练习
 * 创建buffer:把一个UTF-8字符串创建为Buffer 传递其它编码的字符串创建Buffer 创建指定长度的字符串
 * 设置buffer值：set byte
 * buffer转换为字符串：转换为UTF-8字符串 转换为其它编码
 * 分割buffer
 * 复制buffer
 */

/**
 * create
 * new Buffer(string)
 * new Buffer('',coding)
 * new Buffer(length)
 */
var buf=Buffer.alloc(100)

/**
 * set byte
 * buf[0]=12
 */

// console.log(buf.length,typeof buf,buf[100])
for(let i=0;i<buf.length;i++){
    buf[i]=i
}

/**
 * segement
 * slice
 */
var slice=buf.slice(40,60) // 分割buffer

/**
 * copy
 * buf.copy()
 */
var copy=Buffer.alloc(100)
var targetStart=0,
    sourceStart=40,
    sourceEnd=60;
buf.copy(copy,targetStart,sourceStart,sourceEnd)
// console.log(copy)
// console.log(copy==slice)