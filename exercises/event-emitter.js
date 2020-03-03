const eventEmitter=require('events').EventEmitter;
const util=require('util');

const MyClass=function(option1,option2){
    this.option1=option1;
    this.option2=option2;

    const self=this
    const inter=setInterval(function(){
        self.emit('custom event','some arguments');
        console.log(arguments.callee.caller)
        clearInterval(arguments.callee.caller)
    },1000)
}
/**
 * util.inherits 实现对象间原型继承的函数
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

