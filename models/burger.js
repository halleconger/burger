var orm = require("../config/orm.js");

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", cb);
    },

    insertOne: function(newBurger, cb) {
        orm.insertOne("burgers", newBurger, cb);
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, cb);
    }
    
}

module.exports = burger;