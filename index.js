console.log("hi")
const express = require('express')
const app = express()
const port = 5001

app.get('/', function (req, res) {
    console.log("request received")
    res.send('ayush here')
})

app.listen(port, () => {
    console.log(`server started on the port ${port}`)
})