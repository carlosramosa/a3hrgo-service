'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const session     = require('express-session');
const app         = express();

// const { DB_URL, ENV }     = require('./app/config/env');

const chalk       = require('chalk');
const figlet = require('figlet');
figlet('Server Started', (err, data) => 
    console.log(data)
);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/**
 * 
 * INITIALIZE API ROUTERS
 * 
 */
require('./app/routes')({
    app
    , controller: require('./app/controllers')
    // , middleware: require ('./app/middleware')
    // , utils: require('./app/utils/index.js')
    // , Boom: require('boom')
});

/**
 * 
 * START SERVER
 * 
 */
const port = 8000;
app.listen(port, () => {
    console.log(chalk.red('******************\nWe are live on ' + port + '\n******************'));
});
