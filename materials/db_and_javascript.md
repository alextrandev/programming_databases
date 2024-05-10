# Connect to db using javascript

## Using mariaDB library
- Create folder
- Create packpage.json `npm init -y`
- Install mariadb library `npm install mariadb`

## Async function for db  connecting
```javascript
'use strict';

const mariadb = require('mariadb');

const test = async () => {

  const config = {
    host:'localhost', //host of db, can also be 127.0.0.1
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeedb',
    allowPublicKeyRetrieval: true // to connect to mysql instead of mariadb
  };

  const conn = await mariadb.createConnection(config);
  const result = await conn.query('select * from employee');
  console.log(result);

  conn.end();
}

test();
```

## create simple rest server
- Create new folder
- Initialize npm `npm init -y`
- Install dependencies `npm install mariadb express cors`
- 