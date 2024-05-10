'use strict';

const cors = require('cors');
const express = require('express');
const app = express();
const {getAll} = require('./databaseFunctions');
const {port, host} = require('./config.json'); //server host and port, not db
const RESOURCE = 'employees';
const PRIMARY_KEY = 'employeeId';

app.use(cors());
app.use(express.json());
app.get('/rest', (req,res) => res.json(RESOURCE));
app.get(`/rest/${RESOURCE}/pk`), (req,res) => res.json(PRIMARY_KEY);

app.get(
  `/rest/${RESOURCE}`, 
  (req,res) => getAll()
    .then(result => res.json(result))
    .catch(err => res.json(err))
);

app.listen(port, host,
  () => console.log(`Rest server ${host}:${port} serving...`));