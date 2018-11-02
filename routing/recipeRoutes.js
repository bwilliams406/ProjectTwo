const db = require('../models');
const express = require("express");
const path = require('path');



module.exports = function(app) {
// POST route for adding new authors
app.post('/api/recipe', function(req, res) {
    db.recipe.create(req.body).then(function(dbrecipe) {
      res.json(dbrecipe);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });



app.get('/api/recipe', function(req, res) {
  db.recipe.findAll({
    // include: [db.Post]
  }).then(function(recipe) {
    res.json(recipe);
  }).catch(function(error) {
    res.json({ error: error });
  });
});



  // PUT route for updating authors
  app.put('/api/recipe/:id', function(req, res) {
    db.recipe.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(dbrecipe) {
      res.json(dbPost);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE route for deleting authors
  app.delete('/api/recipe/:id', function(req, res) {
    db.recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbrecipe) {
      res.json(dbrecipe);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });
     




};