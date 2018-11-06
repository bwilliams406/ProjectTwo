const express = require("express");
const path = require('path');
const app = express();

module.exports = function(app){

app.get('', function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get('/employee', function(req,res){
    res.sendFile(path.join(__dirname, "../public/employee.html"));
})

app.get('/recipe', function(req, res){
    res.sendFile(path.join(__dirname, "../public/recipe.html"));
});

app.get('/inventory', function(req, res){
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
});

app.get('/', function(req, res){
    res.send('Welcome to Passport with Sequelize');
  });
}