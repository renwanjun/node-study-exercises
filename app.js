const express = require("express")
const app = express();
app.get('/', (req, res) => {
    const num = 100
    console.log('ss')
    res.send('Hello World')
})
app.listen(3000, () => console.log('程序运行在3000端口'))
