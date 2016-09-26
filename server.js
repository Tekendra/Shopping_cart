var express=require("express");
var app=express();

var bodyParser = require('body-parser');
var mysql=require("mysql");
var connection =require('express-myconnection');

app.use(bodyParser.json());// to support json
app.use(bodyParser.urlencoded({ extended: true }));//to support

app.use(express.static(__dirname + '/'));
console.log("static files initialized..");

app.use(connection(mysql, {
    host: 'localhost',
    user: 'ui',
    password: 'ui1234',
    database: 'shopping_cart'
},'request'));

app.get("/service/inventoryType",function (req,res,next) {
    var ids=[];

    var query ="SELECT * FROM inventorytype";
        req.getConnection(function (err,connection) {
            if(err) return next(err);

            connection.query(query,ids,function (err,results) {
                if(err){
                    console.log(err);
                    return next("Mysql error, check your query");
                }
                res.json(results);

            });
        });
});

app.get("/service/inventoryType/:id",function (req,res,next) {
    var ids=[];
    var Id=req.params.id;
    ids.push(Id);
    var query ="SELECT * FROM inventoryType where Id= ?";
    req.getConnection(function (err,connection) {
        if(err) return next(err);

        connection.query(query,ids,function (err,results) {
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });
    });
});
app.get("/service/inventoryType/:id/inventory",function (req,res,next) {
    var ids=[];
    var Id=req.params.id;
    ids.push(Id);
    var query ="SELECT * FROM inventory where inventoryTypeId= ?";
    req.getConnection(function (err,connection) {
        if(err) return next(err);

        connection.query(query,ids,function (err,results) {
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });
    });
});
app.get("/service/inventory",function (req,res,next) {
    var ids=[];

    var query ="SELECT * FROM inventory";
        req.getConnection(function (err,connection) {
            if(err) return next(err);

            connection.query(query,ids,function (err,results) {
                if(err){
                    console.log(err);
                    return next("Mysql error, check your query");
                }
                res.json(results);

            });
        });
});

//setting up the static filed for hosting
app.use(express.static(__dirname + '/'));//create shopping cart as a root

//routing
app.get('/index', function(req, res){
    res.redirect('/views/index.html');
});

app.get('/home', function(req, res){
    res.redirect('/views/home.html');
});

app.get('/game', function(req, res){
    res.redirect('/views/game.html');
});

app.get('/electronics', function(req, res){
    res.redirect('/views/electronics.html');
});
app.get('/landing', function(req, res){
    res.send('In landing page');
});

//end of routing
//launching app on local host:1234;
app.listen(1234, function(){
    console.log('server loaded on port 1234');
    });