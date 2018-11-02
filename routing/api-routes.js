const db = require('../models');
const express = require("express");
const path = require('path');



module.exports = function(app) {

app.get("/api/inventory", function(req, res) {
    res.json(db);
  });


app.post("/api/inventory", function(req, res) {
    console.log(req.body);
  // First add some data to our database
  db.lotion.create({
  }).then(function(response) {
    console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });


});

//=============================drink ROUTES===================================


app.post("/api/inventory", function(req, res) {
  console.log(req.body);
// First add some data to our database
db.drink.create({
}).then(function(response) {
  console.log('Data added!')

}).catch(function(error) {
  console.log('Error', error);
});


});


};