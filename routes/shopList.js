const quotes = require('express').Router({ mergeParams: true });
 
const {productinput} = require('../controllers/shopList.js');
const {deleteproducts} = require('../controllers/shopList.js');
const {getproducts} = require('../controllers/shopList.js');

quotes.post('/', productinput);
quotes.get('/',getproducts);
 
quotes.put('/', );


module.exports = quotes;
