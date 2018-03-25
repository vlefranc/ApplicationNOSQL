const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

var path = require("path");  
var mongo = require("mongoose");     
var morgan = require("morgan");  
var db = require("./config.js");  

var port = 8000;  

app.listen(port,function(){   
    console.log("server start on port"+ port);  
})  

  