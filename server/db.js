const { MongoClient } = require('mongodb');


const dbUri = 'mongodb://127.0.0.1:27017/todo';

const client = new MongoClient(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = client;