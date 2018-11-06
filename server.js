const path = require('path');
const express = require('express');
const app = express()
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const env = require('dotenv').load()
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 8080;
const db = require('./models')
const models = require('./models')


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');



//Routes
const authRoute = require('./routing/auth')(app, passport);
const htmlRoutes = require('./routing/html-routes')(app);
const employeeRoutes = require('./routing/employee-api-routes')(app);
const recipeRoutes = require('./routing/recipeRoutes')(app);
const inventoryRoutes = require('./routing/inventoryRoutes')(app);

//load passport strategies
require('./config/passport/passport')(passport, models.user);


db.sequelize.sync({}).then(function () {
  console.log('Database is synced!');
  app.listen(PORT, function () {
    console.log('listening on http://localhost:' + PORT);
  });
});



