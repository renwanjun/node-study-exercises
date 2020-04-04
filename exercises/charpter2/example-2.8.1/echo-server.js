const net=require('net');
/**
 * 监听器持续不断的响应事件
 */
const server=net.createServer(socket=>{
    socket.on('data',data=>{
        socket.write(data);
    })
})
server.listen(8888)
/**
 * 响应只应该发生一次的事件
 */
// const server_once=net.createServer(socket=>{
//     socket.once('data',data=>{
//         socket.write(data)
//     })
// })
// server_once.listen(8889)
