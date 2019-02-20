// Create a brand new Express app from scratch
var express = require("express");
var app = express();

// Create a package.json using "npm init" and add express as a dependency

// Visiting "/" should print "Hi there, welcome to my assignment."

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment.");
});

// Visiting "/speak/animal" should print the sounds

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof',
        cat: 'Meow',
        goldfish: "........"
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

// Visiting "/repeat/word/timesRepeat" print word * times

app.get("/repeat/:word/:timesRepeat", function(req, res) {
    var word = req.params.word;
    var times = Number(req.params.timesRepeat);
    var result = "";
    for (var i = 0; i < times; i++){
        result += word + ' ';
    }
    res.send(result)
});

app.get("*", function(req, res) {
    res.send("Page NOT found");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
