const express = require('express');
const app = express();
var bodyParser = require('body-parser')  
app.use(bodyParser.urlencoded({ extended: false }))   
app.use(bodyParser.json())   
// app.use('/static',express.static('static'))
//添加两个路由到应用上
app.use('/Epost', require('./router/post'));
app.use('/Ecomments', require('./router/comments'));
 
//404判断
app.use(function (req, res) {
    res.send('404 not found');
});

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+'/'+"index.html")
// })

app.listen(3000);