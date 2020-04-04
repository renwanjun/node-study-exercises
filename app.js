

const express = require("express")
const test=require("./test")
const app = express();
test.p1.age=14

test.path='././'
console.log(test.p1,test.path)

app.get('/', (req, res) => {
    const num = 100
    console.log('ss')
    res.send('Hello World')
})
app.listen(3000, () => console.log('程序运行在3000端口'))
