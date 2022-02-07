// Module dependencies.
const express = require('express');
const logger = require('morgan');
const path = require('path');
const error = require('http-errors');
const methodOverride = require('method-override')

// Importing routers.
const indexRouter = require('./routes/index');

// Setting up the application.
const app = express();
require('dotenv').config()

// Setting up the view engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Finalizing the application.
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

// Setting up the routers.
app.use('/', indexRouter);

// Forwarding any errors to the error handler.
app.use(function(req, res, next) {
  next(error(404));
});

// Creating the error handler.
app.use(function(err, req, res, next) {
  // Setting up locals.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Set to !== after development.

  // Rendering the error page.
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;