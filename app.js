
//Khởi tạo server
var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(1112);

//Mô tả đường dẫn /home
app.get("/home", function(req,res){
  res.sendFile(__dirname+"/home.html");
});
//Mô tả đường dẫn /introduce
app.get("/introduce", function(req,res){
  res.sendFile(__dirname+"/introduce.html");
});
//Mô tả đường dẫn /timetable
app.get("/timetable", function(req,res){
  res.sendFile(__dirname+"/timetable.html");
});
//Mô tả đường dẫn /quote
app.get("/quote", function(req,res){
  res.sendFile(__dirname+"/quote.html");
});
