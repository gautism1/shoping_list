const quotes = require('express').Router({ mergeParams: true });
 
const {quotesinput} = require('../controllers/shopList.js');
const {deletequote} = require('../controllers/shopList.js');
const {getquote} = require('../controllers/shopList.js');

quotes.post('/', quotesinput);
quotes.get('/',getquote);
quotes.delete('/:id',deletequote);
quotes.put('/', );


module.exports = quotes;
