var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(table, columnName, name) {
    var queryString = "INSERT INTO ?? (??) VALUES ?";
    console.log(queryString);
    connection.query(queryString, [table, columnName, name], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function(table, columnName, name, status, idColumn, rowId) {
    var queryString =
      "UPDATE ?? SET ?? = ? WHERE ?? = ? ";
    connection.query(queryString, [table, columnName, name, status, idColumn, rowId], function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;