var express = require("express");
//lay du lieu post ve bang body parser
var bodyParser = require('body-parser');

var app = express();
app.listen(3000);

var ejs = require("ejs")

var urlencodedParser = bodyParser.urlencoded({extended:false});
//cau hinh EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/khoapham", function(req,res){
    res.render("khoapham")
})


app.get("/hello", function(req,res){
    res.send("<font color=red>Getting Hello Khoa Nguyen nodejs</font>");
});

app.post("/hello", urlencodedParser, function(req,res){
    //lay du lieu dang POST
    var u = req.body.username;
    var p = req.body.password;
    res.send("Username: " + u + "Password: " + p)
});

app.get("/tintuc/:id", function(req,res){
    //lay du lieu dang GET
    var i = req.params.id;
    res.send("Server nhan duoc id =" +i);
});

app.get("/chitiet", function(req,res){
    res.render("chitiet", {hoten: "Kevin Nguyen", namsinh : 1987, mang : [1990, 1991, 1992]});
});

