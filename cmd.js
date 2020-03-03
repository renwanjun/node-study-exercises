
//import * as util from 'util'
const util=require('util')
const fs=require('fs')


let readStream=fs.createReadStream('read.txt');
readStream.on('data',function(data){
    console.log('start',data.toString())
})
readStream.on('end',function(){
    console.log('file ended')
})


//console.log(slice)
util.log('Hello');
let v=0;
function a(v){
    let v2=100;
    v+=v2
}
a(v);
const arg=process.argv;
//console.log(arg)
function test(){
    this.name='22'
    //console.log(this.name)
}
test()

// 递归函数 求阶乘!num
function factorial(num){
    console.log(num)
    if(num<=1){
        return 1
    }else{
        return num*factorial(num-1)
    }
}
factorial(3)
// console.log(factorial(3))