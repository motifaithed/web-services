const express = require('express');

const router = express.Router();

const quotesController = require('../controllers/quotes.controller');



router.get('/quote', quotesController.getQuote);

module.exports = router;
