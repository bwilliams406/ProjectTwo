const db = require('../models');
const express = require("express");
const path = require('path');



module.exports = function(app) {
// POST route for adding new authors
app.post('/api/inventory', function(req, res) {
    db.inventory.create(req.body).then(function(dbinventory) {
      res.json(dbinventory);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });



app.get('/api/inventory', function(req, res) {
  db.inventory.findAll({
    // include: [db.Post]
  }).then(function(inventory) {
    res.json(inventory);
  }).catch(function(error) {
    res.json({ error: error });
  });
});



  // // PUT route for updating authors
  // app.put('/api/inventory/:id', function(req, res) {
  //   db.inventory.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.params.id
  //       }
  //   }).then(function(dbinventory) {
  //     res.json(dbPost);
  //   }).catch(function(error) {
  //     res.json({ error: error });
  //   });
  // });

  // // DELETE route for deleting authors
  // app.delete('/api/inventory/:id', function(req, res) {
  //   db.inventory.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbinventory) {
  //     res.json(dbinventory);
  //   }).catch(function(error) {
  //     res.json({ error: error });
  //   });
  // });
     




};