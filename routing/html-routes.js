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

// app.get('', function(req, res){
//     res.sendFile(path.join(__dirname, ""));
// });
}