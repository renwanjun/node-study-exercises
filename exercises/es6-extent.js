Promise.prototype.done=function(onFullfilled,onRejected){
    this.then(onFullfilled,onRejected)
    .catch(reason=>{
        setTimeout(()=>{
            throw reason
        },0)
    })
}
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason }))
}