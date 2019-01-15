var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("hello there");
});

app.get("/dog", function(req,res)
{
    console.log("someone made a request");
    res.send("bhuu bhuu");
});

app.get("/bye", function(req,res){
    res.send("good bye");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED");
});