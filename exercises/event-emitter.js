/**
 * 自定义事件发射器
 * 用Node内置事件模块创建自己的事件发射器
 */
const eventEmitter=require('events').EventEmitter;
const util=require('util');

const MyClass=function(option1,option2){
    this.option1=option1;
    this.option2=option2;

    const self=this
    const inter=setInterval(function(){
        self.emit('custom event','some arguments'); // 触发'custom event'事件
        console.log(arguments.callee.caller) // 在Node环境中arguments参数失效
        clearInterval(arguments.callee.caller)
    },1000)
}
/**
 * util.inherits 实现对象间原型继承
 */
util.inherits(MyClass,eventEmitter)
MyClass.prototype.someMethod=function(){
    this.emit('custom event','some arguments');
}

const myInstance=new MyClass(1,2);
myInstance.on('custom event',function(){
    console.log('got a custom event');
})

// myInstance.someMethod()

