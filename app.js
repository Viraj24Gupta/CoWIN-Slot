const express = require('express');
const app= express();
const bp = require('body-parser');
const path = require('path');

//middleware for body_parser
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());


//set path directory for ejs files
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//import routes
const basic1 = require ('./routes/basic');
app.use('/' , basic1);

//listening
app.listen(80,()=>{
  console.log("http://localhost");
});