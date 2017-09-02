// Mongo String mongodb://heroku_899133jz:l2ikqf5i9bc8sh5fgtrmrr6qqh@ds121464.mlab.com:2
// 1464/heroku_899133jz

//DEPENDENCIES REQUIRED
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var express = require("express");
var expressHandlebars = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var request = require("request");

//REQUIRE MODELS
var Article = require("./models/Article.js");
var Note = require("./models/Note.js");

//PORT SETUP
var PORT = process.env.PORT || 3000;

//CALL MONGOOSE (?) --tells app to continue running even if mongoose requires waiting time (I think?)
mongoose.Promise = Promise;

//INSTANTIATE EXPRESS APP
var app = express();

//EXPRESS ROUTER SETUP
var router = express.Router();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017");
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

app.listen(3000, function() {
    console.log("App running on port 3000!");
});




