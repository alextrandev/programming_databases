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
    return await conn.query('select * from employee').map(item=>adapt(item));
  } catch (err) {
    console.log(err);
    return err.message;
  } finally {
    if (conn) conn.end();
  }
}

module.exports = {getAll}; //export function