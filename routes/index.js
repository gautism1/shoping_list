const routes = require('express').Router({ mergeParams: true });
const shopList = require('./sellerlist.js');
  
// let jwt = require('jsonwebtoken');
 
routes.use('/seller', shopList)
 
module.exports = routes;