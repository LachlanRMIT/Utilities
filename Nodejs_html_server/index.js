//run node install to install node modules

var express     = require("express");
var app         = express();

app.get("/", function(req,res){
	//render each html in the directory views
	res.sendFile(__dirname + "/views/home.html");
})

app.listen(5000, function(){
    console.log("server running on port 5000");
})