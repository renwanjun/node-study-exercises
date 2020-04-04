// const events = require('events');
const net = require('net');
const EventEmitter = require('events').EventEmitter;
const channel = new EventEmitter();
channel.clients = {}
channel.subscriptions = {}
// 添加join事件的监听器，保存用户的client对象，以便程序可以将数据发送给用户
channel.on('join', function(id, client){
    const welcome=`Welcome!\n Guests online:${this.listeners('broadcast').length}`;
    client.write(`${welcome}\n`)

    this.clients[id] = client
    this.subscriptions[id] = (senderId, message) => {
        this.clients[id].write(`用户${id}输出：${message}`)
        // 忽略发出这一广播数据的用户
        if (id != senderId) {
            console.log(message)
            this.clients[id].write(message)
        }
    }
    // 添加一个专门针对当前用户的broadcast事件监听器
    this.on('broadcast', this.subscriptions[id])
})
// 创建leave事件监听器
channel.on('leave',function(id){
    this.removeListener('broadcast',this.subscriptions[id])
    this.emit('broadcast',id,`${id} has left the chatroom.\n`)
})
// 创建停止服务监听器
channel.on('shutdown',function(){
    this.emit('broadcast','','The server has shut down.\n');
    this.removeAllListeners('broadcast')
})
// 
channel.setMaxListeners(50);
const server = net.createServer(client => {
    const id = `${client.remoteAddress}:${client.remotePort}`;
    // console.log(id)
    channel.emit('join', id, client)
    client.on('data', data => {
        data = data.toString()
        if(data==='shutdown\r\n'){
            channel.emit('shutdown')
        }
        channel.emit('broadcast', id, data);
    })
    client.on('close',()=>{
        channel.emit('leave',id) // 在用户断开时发出leave事件
    })
})
server.listen(8888)