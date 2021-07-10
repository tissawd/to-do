const express = require('express');
const client = require('./db');

const app = express();




app.get('/', (req, res) => {
  res.send('Hello')
});

const run = async () => {
  try { 
    await client.connect();
    console.log('db connected')
  }
    catch {
      console.log('Something went wrong')
    }


    app.listen(8080, () => {
      console.log("app listening on port 8080")
    })
  
  
  
};

run();



