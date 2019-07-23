'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();

// const { DB_URL, ENV }     = require('./app/config/env');

const chalk       = require('chalk');
const figlet = require('figlet');
figlet('Server Started', (err, data) => 
    console.log(data)
);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routesContext = {
    app
    , controller: require('./app/controllers')
}
/**
 * 
 * INITIALIZE API ROUTES
 * 
 */
require('./app/routes')(routesContext);

/**
 * 
 * START SERVER
 * 
 */
const port = 8000;
app.listen(port, () => {
    console.log(chalk.red('******************\nWe are live on ' +  port + '\n******************'));
});
