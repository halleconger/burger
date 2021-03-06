var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// CREATE ROUTES AND LOGIC WITHIN ROUTES

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log("hbs object: " + hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(
        {
            "burger_name": req.body.name
        }, function () {
            res.status(200).end();
        }
    );
});

router.put("/:id", function (req, res) {
    var condition = { id: req.params.id };

    burger.updateOne({
        devoured: 1
    }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
            // res.redirect("/");
        }
    });
});


module.exports = router;