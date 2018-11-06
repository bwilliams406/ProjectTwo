const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;


const db = require('./models')



app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require('./routing/html-routes')(app);
const employeeRoutes = require('./routing/employee-api-routes')(app);
const recipeRoutes = require('./routing/recipeRoutes')(app);
const inventoryRoutes = require('./routing/inventoryRoutes')(app);




db.sequelize.sync({}).then(function () {
  console.log('Database is synced!');
  app.listen(PORT, function () {
    console.log('listening on http://localhost:' + PORT);
  });
});



