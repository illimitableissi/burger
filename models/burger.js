var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(name, cb) {
      orm.insertOne("burgers", "burgers_name", name, function(res) {
        cb(res);
      });
    },
    updateOne: function(table, columnName, name, status, idColumn, rowId, cb) {
      orm.updateOne("burgers", "burger_name", 1, "id", burgerId, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;