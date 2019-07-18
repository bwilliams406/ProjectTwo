const db = require('../models');
const express = require("express");
const path = require('path');



module.exports = function (app) {
  app.post('/api/user', function (req, res) {
    db.user.create(req.body).then(function (dbuser) {
      res.json(dbuser);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });



  app.get('/api/user', function (req, res) {
    db.user.findAll({
      // include: [db.User]
    }).then(function (user) {
      res.json(user);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });
};

