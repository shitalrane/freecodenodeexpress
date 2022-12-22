let express = require('express');
let app = express();
require('dotenv').config()

//1
// console.log("Hello World")

//2
// app.get("/", (req, res) => {
// console.log(res)
// res.send("Hello Express")
// })

//3
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/index.html")
// })

//4
// app.use("/public", express.static(__dirname + "/public"));

//5
// app.get("/json", (req, res) => {
//     res.send({ messege: "Hello json" })
// })

//7
// app.use(function middleware(req, res, next) {
//     var str = req.method + " " + req.path + "-" + req.ip
//     console.log(str)
//     next()
// })

//6


// console.log(process.env.MESSAGE_STYLE)
// res.send({ messege: process.env.MESSAGE_STYLE })

app.get('/json', (req, res) => {
    console.log(process.env.MESSAGE_STYLE +  " messege style")
        if (process.env.MESSAGE_STYLE === "uppercase") {
            res.json({ "message": "HELLO JSON" });
        } else {
            res.json({ "message": "Hello json" });
        }

});




































module.exports = app;
