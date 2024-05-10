'use strict';

const cors = require('cors');
const express = require('express');
const app = express();
const {getAll, getOne, add, update, remove} = require('./databaseFunctions');
const {port, host} = require('./config.json'); //server host and port, not db
const RESOURCE = 'employees';
const PRIMARY_KEY = 'employeeId';

app.use(cors());
app.use(express.json());
app.get('/rest', (req,res) => res.json(RESOURCE));
app.get(`/rest/${RESOURCE}/pk`), (req,res) => res.json(PRIMARY_KEY);

// create some routes and return server function
// Fetch all rows
app.get(
  `/rest/${RESOURCE}`, 
  (req,res) => getAll()
    .then(result => res.json(result))
    .catch(err => res.json(err))
);

// fetch one row
app.get(
  `/rest/${RESOURCE}/:key`, 
  (req,res) => getOne(req.params.key)
    .then(result => res.json(result))
    .catch(err => res.json(err))
);

// add 
app.post(
  `/rest/${RESOURCE}`,
  (req,res) => add(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
);

// update
app.put(`/rest/${RESOURCE}/:key`, async (req,res) => {
  const resourceOject = req.body;
  const key=req.params.key;

  if (key != resourceOject[PRIMARY_KEY]) {
    res.json({error: "Keys don't match"})
  } else {
    try {
      const getResult = await getOne(key);
      if (getResult.length > 0) {
        update(resourceOject)
          .then(result => res.json(result))
          .catch(err => res.json(err));
      } else {
        add (resourceOject)
          .then(result => res.json(result))
          .catch(err => res.json(err));
      }
    } catch (err) {
      res.json({error:'Put failed'});
    }
  }
});

app.all('*', (req,res) => res.json('Not supported'));

// delete
app.get(
  `/rest/${RESOURCE}/:key`, 
  (req,res) => remove(req.params.key)
    .then(result => res.json(result))
    .catch(err => res.json(err))
);

app.listen(port, host,
  () => console.log(`Rest server ${host}:${port} serving...`));