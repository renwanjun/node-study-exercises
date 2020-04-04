
//import * as util from 'util'
const util=require('util')
const fs=require('fs')

util.log('Hello')

const txtPath='a.txt'
let readStream=fs.createReadStream(txtPath);
readStream.on('data',function(data){
    console.log('start',data.toString())
    console.log('ss')
})
readStream.on('end',function(){
    console.log('file ended')
})
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
/**
 * 尾递归优化
 */

function factorial(num){
    try{
        fac(num)
    }catch(e){
        console.log(e)
    }
    function fac(num,total=1){
        if(typeof num !== 'number' || num<1){
            throw new Error(`${num}不符合数据规范`)
        }
        if(num<1){
            return total
        }else{
            return fac(num-1,num*total)
        }
    }
}
factorial(-3)
// console.log()