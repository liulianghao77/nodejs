var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
 
 //加用户
 app.get('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
 })

 //显示详细信息
 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id] 
        console.log( user );
        res.end( JSON.stringify(user));
    });
 })

 //删除用户
app.get('/deleteUser', function (req, res) {
    console.log("00000000");
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       console.log("11111111111");
       delete data["user" + 2];
       console.log("22222222");
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})