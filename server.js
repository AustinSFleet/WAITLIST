var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


var tables = [
    {
    name: "Marty",
    phone: "206-251-0080",
    party: 6,
    tip: 25
    },
    {
    name: "Sultan of Brunei",
    phone: "201-333-4577",
    party: 12,
    tip: 8000
    },
    {
    name: "Gordo",
    phone: "777-777-7777",
    party: 2,
    tip: 18
    },
    {
    name: "Party Marty",
    phone: "206-251-0080",
    party: 6,
    tip: 25
    },
    {
    name: "Smarty Marty",
    phone: "206-251-0080",
    party: 6,
    tip: 25
    }
  ];
  
  var waitlist = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post("/api/new", function(req, res) {
    var newTable = req.body;

    if (tables.length < 5) {
        tables.push(req.body);
    } else {
        // alert("TABLES FILLED YOU GOTTA WAIT BOO");
        waitlist.push(req.body);
    }
    // console.log(tables.name);
    // console.log(waitlist.)
  });

app.get("/api/tables", function(req, res){
    res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    res.json(waitlist);
});