const invList = require('../models')
const express = require("express");
const path = require('path');



module.exports = function(app) {

app.get("/api/inventory", function(req, res) {
    res.json(invList);
  });


app.post("/api/inventory", function(req, res) {
    console.log(req.body);
  // First add some data to our database
  invList.lotionInv.create({
    item_discription: 'Purified Water USP',
    part_number: "51-20000",
    weight_needed: 51.0439 ,
    amount_instock:10000,
    in_stock: true
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });


  // // Updates the ProgrammingLanguages table
  // // Sets the values specified in the first argument object
  // // Uses second argument object to match condition
  // invList.lotionInv.update({
  //   amount_instock: 12000
  // },{
  //   where: { id: 4 }
  // }).then(function(response) {
  //   console.log(`Success! Number of rows affected: ${response[0]}`);
  // }).catch(function(error) {
  //   console.log('Error', error);
  // });

  // // Deletes a row from the ProgrammingLanguages table
  // // Matches the condition in the argument object
  // db.recipeInv.destroy({
  //   where: { id: 5 }
  // }).then(function(response) {
  //   console.log(`Success! Number of rows affected: ${response[0]}`);
  // }).catch(function(error) {
  //   console.log('Error', error);
  // });


  // First add some data to our database
  invList.drinkInv.create({
    item_discription: 'Purified Water USP',
    part_number: "51-20000",
    weight_needed: 51.0439 ,
    amount_instock:10000,
    in_stock: true
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });
});

  // Updates the ProgrammingLanguages table
  // Sets the values specified in the first argument object
  // Uses second argument object to match condition
//   db.drinkInv.update({
//     amount_instock: 12000
//   },{
//     where: { id: 4 }
//   }).then(function(response) {
//     console.log(`Success! Number of rows affected: ${response[0]}`);
//   }).catch(function(error) {
//     console.log('Error', error);
//   });

//   // Deletes a row from the ProgrammingLanguages table
//   // Matches the condition in the argument object
//   db.recipeInv.destroy({
//     where: { id: 5 }
//   }).then(function(response) {
//     console.log(`Success! Number of rows affected: ${response[0]}`);
//   }).catch(function(error) {
//     console.log('Error', error);
//   });




}