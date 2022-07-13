
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Fikri",
  password: null,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});