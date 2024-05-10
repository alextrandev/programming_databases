'use strict';

const {getAll, getOne} = require('./databaseFunctions');

// getAll().then(console.log).catch(console.log);
getOne(2).then(console.log).catch(console.log);