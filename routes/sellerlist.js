const quotes = require('express').Router({ mergeParams: true });
 
const {productinput} = require('../controllers/sellerlist.js');
const {deleteproducts} = require('../controllers/sellerlist.js');
const {getproducts} = require('../controllers/sellerlist.js');

quotes.post('/', productinput);
quotes.get('/',getproducts);
 
quotes.put('/', );


module.exports = quotes;
