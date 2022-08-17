//node related require
//express related require
const express = require('express');
//developer related require
const qoutesRoutes = require('./routes/quotes.routes');

//initialization
const app = express();
const db = require('./data/database');

app.use(qoutesRoutes);

db.connectToDatabase().then(()=>{
    app.listen(3000);
}).catch((error)=>{
    console.log('connection not established');
    console.log(error);
});