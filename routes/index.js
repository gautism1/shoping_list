const routes = require('express').Router({ mergeParams: true });
const shopList = require('./sellerlist');
 
routes.use('/seller', shopList)
 
module.exports = routes;