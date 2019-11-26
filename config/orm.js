var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectaAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(table, name) {
    var queryString = "INSERT into ?? VALUES ?";
    console.log(queryString);
    connection.query(queryString, [table, name], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function(table, name, status, id) {
    var queryString =
      "UPDATE ?? SET burger_name = ?, devoured = ? WHERE id = ? ";
    connection.query(queryString, [table, name, status, id], function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;