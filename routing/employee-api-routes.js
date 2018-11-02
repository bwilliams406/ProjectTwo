const db = require('../models');
const express = require("express");
const path = require('path');



module.exports = function(app) {
// app.post("/api/employee", function(req, res) {
//   console.log(req.body);
// // First add some data to our database
// db.employee.create({
// }).then(function(response) {
//   console.log('Data added!')
// }).catch(function(error) {
//   console.log('Error', error);
// });

// });


// POST route for adding new authors
app.post('/api/employee', function(req, res) {
    db.employee.create(req.body).then(function(dbemployee) {
      res.json(dbemployee);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });



app.get('/api/employee', function(req, res) {
  db.employee.findAll({
    // include: [db.Post]
  }).then(function(employee) {
    res.json(employee);
  }).catch(function(error) {
    res.json({ error: error });
  });
});



  // PUT route for updating authors
  app.put('/api/employee/:id', function(req, res) {
    db.employee.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(dbemployee) {
      res.json(dbPost);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE route for deleting authors
  app.delete('/api/employee/:id', function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbemployee) {
      res.json(dbemployee);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });
     




};