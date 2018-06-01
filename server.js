var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// SERVE STATIC CONTENT FOR THE APP FROM THE "PUBLIC" DIRECTORY IN THE APPLICATION DIRECTORY
app.use(express.static("public"));

// PARSE APPLICATION
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SET HANDLEBARS
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORT ROUTES AND GIVE THE SERVER ACCESS TO THEM
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// START OUR SERVER SO THAT IT CAN BEGIN LISTENING TO CLIENT REQUESTS
app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
});

