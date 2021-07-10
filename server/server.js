const express = require('express');
const { client } = require('./db');

const app = express();




app.get('/', async (req, res) => {
  const taskList = await client.listDatabases()
  console.log(taskList);
  res.send(taskList)
});

const run = async () => {
  try { 
    await client.connect();
    console.log('db connected')
    // client.tasks.insertOne({"task": "task from the db", "complete": "false"})
  }
    catch {
      console.log('Something went wrong')
    }


    app.listen(8080, () => {
      console.log("app listening on port 8080")
    })
  
  
  
};

run();



