const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connect(){
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  //establish a connection to the database
  database = client.db('quotes');
}

function getDb(){

  if(!database){
      throw new Error('connection could not be established');
  }
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb
}