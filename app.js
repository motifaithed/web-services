//node related require
//express related require
const express = require('express');
//developer related require
const qoutesRoutes = require('./routes/quotes.routes');

//initialization
const app = express();
const db = require('./data/database');

app.use('/quote', qoutesRoutes);

app.use(function(error,req,res,next){
    res.status(500).json({
        message: 'something went wrong'
    })
});

db.connectToDatabase().then(()=>{
    app.listen(3000);
}).catch((error)=>{
    console.log('connection not established');
    console.log(error);
});