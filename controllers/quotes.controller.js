const Quote = require('../models/quote.model')

async function getQuote(req,res,next){
    let randomQuote;
    try{
         randomQuote = await Quote.getRandomQuote();
    }catch(error){
        next(error)
    }

    res.json({quote: randomQuote});   
}

module.exports = {
    getQuote: getQuote
}