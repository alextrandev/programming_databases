'use strict';

const {getAll} = require('./databaseFunctions');

getAll().then(console.log).catch(console.log);