

/**
 * setTimeout.setInterval、setImmediate
 */
setTimeout(() => {
    console.log('setTimeout')
    clearInterval(interval)
}, 2000);


var interval=(function (num) {
    return setInterval(() => {
        console.log('setInterval' + ++num)
    }, 1000)
})(0)

setImmediate(()=>{
    console.log('lay')
})

Promise.resolve([1,2,3,[4,[10,{'a':0,'b':1}],5,6,[0,10]]]).then(value=>{
    console.log(`promise${value.toString()}`)
    console.log({a:'1',b:2}.valueOf())
})