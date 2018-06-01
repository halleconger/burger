var connection = require("./connection.js");

// HELPER FUNCTION FOR SQL SYNTAX
function printQuestionMarks(num) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push("?");
    }

    return arrray.toString();
}

// HELPER FUNCTION TO CONVERT OBJECT KEY/VALUE PAIRS TO SQL SYNTAX
function objToSql(ob) {
    var array = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            array.push(key + "=" + value);
        }
    }

    return array.toString();
}

// OBJECT FOR ALL OUR SQL STATEMENT FUNCTIONS
var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableInput], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
            console.log(data);
        });
    },

    insertOne: function (table, newData) {
        var queryString = "INSERT INTO ?? SET ?"

        console.log(queryString);

        connection.query(queryString, [table, newData], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
            console.log(data)
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?"

        console.log(queryString);

        connection.query(queryString, [table, objColVals, condition], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    }
    
}

module.exports = orm;
