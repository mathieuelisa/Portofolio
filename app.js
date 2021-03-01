const express = require('express');
const ejs = require ("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/home', function(req,res) {
  res.render("home");
});

app.get('/project-1', function(req,res) {
    res.render("project-1");
  });

  app.get('/project-2', function(req,res) {
    res.render("project-2");
  });

  app.get('/project-3', function(req,res) {
    res.render("project-3");
  });

  app.get('/project-4', function(req,res) {
    res.render("project-4");
  });

  app.get('/project-5', function(req,res) {
    res.render("project-5");
  });




app.listen(3000, function(){
    console.log("Your server running on port 3000")
});