    var mysql = require('mysql');
    var bodyParser = require('body-parser');
    var express = require('express'); 
    var app = express(); 

    app.use(express.static(__dirname + '/src'));

    app.use(bodyParser.urlencoded({ extended: false })); 
    app.use(bodyParser.json()); 

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'election'
    });

    connection.connect(function(err) {
      if (err) {
        return console.error('error: ' + err.message);
      }
      console.log('Connected to the MySQL server.');

  });
 
    

    