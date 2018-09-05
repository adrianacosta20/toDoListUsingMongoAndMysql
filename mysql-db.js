/*
*************MySQL Connection stuff******************
*/

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'aacosta.techlaunch.io',
  user: 'root',
  password: 'open',
  database: 'todo'
});

connection.connect();

module.exports = connection;

// connection.end();