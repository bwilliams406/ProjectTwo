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
  db.lotionInv.create({
  }).then(function(response) {
    console.log('Data added!')
    
    db.drinkInv.create({
    }).then(function(response) {
      console.log('Data2 added!')

      // db.employee.create({
      // }).then(function(response) {
      //   console.log('Data added!')
      // }).catch(function(error) {
      //   console.log('Error', error);
      // });

    }).catch(function(error) {
      console.log('Error', error);
    });

  }).catch(function(error) {
  	console.log('Error', error);
  });


});
}