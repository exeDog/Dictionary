var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/app/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.post("/dictionary-api", function(req, res) {
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.delete("/dictionary-api/:term", function(req, res) {
    skierTerms = skierTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});

app.listen(process.env.port || 5000);

module.exports = app;