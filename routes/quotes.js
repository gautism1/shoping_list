const quotes = require('express').Router({ mergeParams: true });
 
const {quotesinput} = require('../controllers/quotes.js');
const {deletequote} = require('../controllers/quotes.js');
const {getquote} = require('../controllers/quotes.js');

quotes.post('/', quotesinput);
quotes.get('/',getquote);
quotes.delete('/:id',deletequote);
quotes.put('/', );


module.exports = quotes;
