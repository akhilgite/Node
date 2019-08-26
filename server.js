/*var http = require("http");
http.createServer(engine).listen(2020);
function engine(req, res){

    res.writeHead(200,{"Content-type":"text/html"});
    res.write("Hello World");
    res.end();
}*/

var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var mysql = require("mysql");

var app = express();
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sampleDB"
});

connection.connect(function(error){
    //callback
    if(error){
        console.log("error");
    }else{
        console.log("connected");
    }
});

app.use("/node",express.static(__dirname+"/assets"));
app.use(bodyParser.json());
app.use(bodyParser());

var server = app.listen(3000,function(){
    console.log("Hello Wordl");
})

app.get("/",function(req,res){
    res.send("Hello from express");
});

app.get("/other",function(req,res){
    //res.send("Hello from other");

    fs.readFile(__dirname+"/files/first.html", function(err, data){
        if(err){
            res.send("The requested file does not exist");
            throw err;
        }

        res.sendFile(__dirname+"/files/first.html");
    });

    
});

app.get("/login",function(req,res){
    //res.send("Hello from other");
    res.sendFile(__dirname+"/files/login.html");
});

app.get("/welcomeGet",function(req,res){
    console.log(res);
    res.send("Welcome through get method username is "+req.query.username+" and your passwprd is "+req.query.password);
    //res.sendFile(__dirname+"/files/login.html");
});

app.post("/welcomePost",function(req,res){
    //console.log(res);
    
    //res.send("Welcome, your username is "+req.body.username+" and your passwprd is "+req.body.password);
    res.send(JSON.stringify(req.body));
});