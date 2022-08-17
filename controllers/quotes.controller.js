function getQuote(req,res){
    return res.json({quote: 'hello world'});   
}

module.exports = {
    getQuote: getQuote
}