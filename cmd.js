const arg=process.argv;
console.log(arg)
function test(){
    this.name='22'
    console.log(this.name)
}
test()
