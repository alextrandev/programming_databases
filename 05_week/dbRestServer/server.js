'use strict';

const cors = require('cors');
const express = require('express');
const app = express();
const {getAll, getOne, add} = require('./databaseFunctions');
const {port, host} = require('./config.json'); //server host and port, not db
const RESOURCE = 'employees';
const PRIMARY_KEY = 'employeeId';

app.use(cors());
app.use(express.json());
app.get('/rest', (req,res) => res.json(RESOURCE));
app.get(`/rest/${RESOURCE}/pk`), (req,res) => res.json(PRIMARY_KEY);

// create some routes and return server function
app.get(
  `/rest/${RESOURCE}`, 
  (req,res) => getAll()
    .then(result => res.json(result))
    .catch(err => res.json(err))
);

app.get(
  `/rest/${RESOURCE}/:key`, 
  (req,res) => getOne(req.params.key)
    .then(result => res.json(result))
    .catch(err => res.json(err))
);

app.listen(port, host,
  () => console.log(`Rest server ${host}:${port} serving...`));