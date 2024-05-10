'user strict';

const mariadb = require('mariadb');

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'employeedb',
  allowPublicKeyRetrieval: true
}

const adapt = item => Object.assign(item, {
  employeeId: +item.employeeID,
  salary: +item.salary,
}); // arrow function

const getAll = async () => {
  let conn;
  
  try {
    conn = await mariadb.createConnection(config);
    // return await conn.query(stmt, [id]).map(item => adapt(item));
    const results = await conn.query('select * from employee');
    return results.map(item => adapt(item));
  } catch (err) {
    console.log(err);
    return err.message;
  } finally {
    conn?.end();
  }
}

const getOne = async (id) => {
  let conn;
  
  try {
    conn = await mariadb.createConnection(config);
    const stmt = 'select * from employee where employeeID=?';
    const results = await conn.query(stmt, [id]);
    return results.map(item => adapt(item));
    // return await conn.query(stmt, [id]).map(item => adapt(item));
    // map not working because it return promise not array

  } catch (err) {
    console.log(err);
    return err.message;

  } finally {
    conn?.end();

  }
}

const add = async (newEmployee) => {
  let conn;

  try {
    conn = await mariadb.createConnection(config);
    const stmt = 'insert into employee values(?,?,?,?,?)';
    const parameters = [
      +newEmployee.employeeID,
      newEmployee.firstname,
      newEmployee.lastname,
      newEmployee.department,
      +newEmployee.salary
    ]; // the plus sign is to convert value into number
    const results = await conn.query(stmt, parameters);
    console.log(results);
    return {rowsChanged:results.affectedRows}

  } catch (err) {
    console.log(err);
    return err.message;

  } finally {
    conn?.end();

  }
}

const update = async (newEmployee) => {
  let conn;

  try {
    conn = await mariadb.createConnection(config);
    const stmt = 'update employee set firstname=?, lastname=?, department=?, salary=? where employeeID=?';
    const parameters = [
      newEmployee.firstname,
      newEmployee.lastname,
      newEmployee.department,
      +newEmployee.salary,
      +newEmployee.employeeID
    ]; // the plus sign is to convert value into number
    const results = await conn.query(stmt, parameters);
    console.log(results);
    return {rowsChanged:results.affectedRows}

  } catch (err) {
    console.log(err);
    return err.message;

  } finally {
    conn?.end();

  }
}

const remove = async (id) => {
  let conn;
  
  try {
    conn = await mariadb.createConnection(config);
    const stmt = 'delete from employee where employeeID=?';
    const results = await conn.query(stmt, [id]);
    return {rowsChanged:results.affectedRows}

  } catch (err) {
    console.log(err);
    return err.message;

  } finally {
    conn?.end();

  }
}

module.exports = {getAll, getOne, add, update, remove}; //export function