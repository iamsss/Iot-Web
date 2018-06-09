require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {ObjectID} = require('mongodb');
const {bcrypt} = require('bcryptjs');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();

module.exports = { app,hbs };

require('./Pipe/upper.pipe');
require('./Pipe/currentYear.pipe');
require('./config/view.config');
require('./Controller/HomeController/home.controller');
require('./Controller/UserController/user.controller');
require('./Controller/BulbController/bulb.controller');


// The 404 Not Found Route (ALWAYS Keep this as the last route)
require('./middleware/notFound');

if(process.env.NODE_ENV != 'test') {
app.listen(port, () => {   console.log(`Started at port ${port}`) });
}else{
    console.log("Testing process");
}

