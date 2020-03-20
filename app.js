/**
 * Required External Modules
 */

const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 *  App Configuration
 */
app.use(morgan('tiny')); // in console DEBUG=app node app.js -- dit geeft status messages weer #debugging
app.use(express.static(path.join(__dirname, '/public'))); // express laten weten waar public is

app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
  express.static(path.join(__dirname, '/node_modules/jquery/dist'))
);

app.set('views', './source/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { nav: ['Books', 'Authors'], title: 'Library' });
});

/**
 * Routes Definitions
 */

/**
 * Server Activation
 */

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
