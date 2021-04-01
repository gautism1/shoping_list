const routes = require('express').Router({ mergeParams: true });
const quotes = require('./quotes.js');
  
let jwt = require('jsonwebtoken');
 
routes.use('/quotes', quotes)
 
module.exports = routes;