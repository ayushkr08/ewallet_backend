const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 5001
var userdb = {

}



app.use(bodyParser.json())
app.post('/signup', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    userdb[username] = password
    console.log(userdb)
    res.send("signup successfull")
})
app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    res.json({ "username": username, "password": password })

})
app.get('/', function (req, res) {
    console.log("request received")
    res.send('ayush here')
})

app.listen(port, () => {
    console.log(`server started on the port ${port}`)
})
