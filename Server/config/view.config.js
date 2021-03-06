const {app} = require('../server');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// Path Declarations
const publicPath = path.join(__dirname, '../../Public');
const partialViewPath = path.join(__dirname, '../views/partials');
const viewPath = path.join(__dirname, '\../views');


app.use(bodyParser.json());
app.use(express.static(publicPath));

app.set('views', viewPath );  // Setting Default Path For Views
app.set('view engine', 'hbs'); // set configuration for views

//to set Partial View
hbs.registerPartials(partialViewPath);