'use strict';
// this file is to test connection before running the server

const {getAll, getOne, add, update, remove} = require('./databaseFunctions');

//test get all
// getAll().then(console.log).catch(console.log);

//test get one
// getOne(2).then(console.log).catch(console.log);

// test add
// const newItem = {
//   employeeID: 4,
//   firstname: 'Vera',
//   lastname: 'Ocean',
//   department: 'admin',
//   salary: 5678.87
// };
// add(newItem).then(console.log).catch(console.log);

// test update
// const item = {
//   employeeID: 4,
//   firstname: 'Vera',
//   lastname: 'Smith',
//   department: 'admin',
//   salary: 6678.87
// };
// update(item).then(console.log).catch(console.log);

// test remove
remove(4).then(console.log).catch(console.log);