'use strict';
// this file is to test connection before running the server

const {getAll, getOne, add} = require('./databaseFunctions');

//test get all
// getAll().then(console.log).catch(console.log);

//test get one
// getOne(2).then(console.log).catch(console.log);

// test add
const newItem = {
  employeeID: 4,
  firstname: 'Vera',
  lastname: 'Ocean',
  department: 'admin',
  salary: 5678.87
};

add(newItem).then(console.log).catch(console.log);