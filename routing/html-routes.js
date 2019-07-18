const express = require("express");
const path = require('path');
const app = express();


module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render("signin")
    });

    app.get('/signup',  function (req, res) {
        res.render("signup")
    });

    app.get('/employee', isLoggedIn, function (req, res) {
        res.render("employee", { user: req.user })
    });

    app.get('/inventory', isLoggedIn, function (req, res) {
        res.render("inventory", { user: req.user })
    });

    app.get('/recipe', isLoggedIn, function (req, res) {
        res.render("recipe", { user: req.user })
    });


    app.get("/dashboard", isLoggedIn,  function (req, res) {
        console.log(req.user)
        res.render("dashboard", { user: req.user })
    })



}


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}
