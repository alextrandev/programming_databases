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

const getAll = async () => {
  let conn;
  
  try {
    conn = await mariadb.createConnection(config);
    return await conn.query('select * from employee');
  } catch (err) {
    console.log(err);
    return err.message;
  } finally {
    if (conn) conn.end();
  }
}

module.exports = {getAll}; //export function