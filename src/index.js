let mysql = require('mysql');
let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '18FFaridah',
        database: 'election'
    });

    connection.connect(function(err) {
      if (err) {
        return console.error('error: ' + err.message);
      }
      console.log('Connected to the MySQL server.');

  });

    connection.query('SELECT * FROM election', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  rows.forEach( (row) => {
  console.log(`${row.election_name}`);
});
});