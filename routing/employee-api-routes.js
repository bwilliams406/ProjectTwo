const db = require('../models');
const express = require("express");
const path = require('path');



module.exports = function (app) {
  // POST route for adding new employees
  app.post('/api/employee', function (req, res) {
    db.employee.create(req.body).then(function (dbemployee) {
      console.log("Posted")
      res.json({ success: true, user: dbemployee });
    }).catch(function (error) {
      res.json({ error: error });
    });
  });



  app.get('/api/employee', function (req, res) {
    db.employee.findAll({
      // include: [db.Post]
    }).then(function (employee) {
      res.json(employee);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });



  // PUT route for updating employees
  app.put('/api/employee/:id', function (req, res) {
    db.employee.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbemployee) {
        res.json(dbPost);
      }).catch(function (error) {
        res.json({ error: error });
      });
  });

  // DELETE route for deleting employees
  app.delete('/api/employee/:id', function (req, res) {
    db.employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbemployee) {
      res.json(dbemployee);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });






};