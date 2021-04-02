const routes = require('express').Router({ mergeParams: true });
const shopList = require('./shopList.js');
  
// let jwt = require('jsonwebtoken');
 
routes.use('/shopList', shopList)
 
module.exports = routes;