(function () {
    "use strict";
    
    var express = require('express3'),
            http = require('http'),
            mongoose = require('mongoose'),
            app = express();

    app.use(express.static(__dirname));
    app.use(express.urlencoded());
    
    mongoose.connect('mongodb://localhost/music');
    
    var MusicianSchema = mongoose.Schema({
        "name": String,
        "genre": String,
        "albums" : String,
    });
    var Musician = mongoose.model('Musician', MusicianSchema);
    var SongSchema = mongoose.Schema({
        "artist": String,
        "song": String
    });
    var Song = mongoose.model('Song', SongSchema);
    http.createServer(app).listen(3000);

    app.get("/getMusician", function(req, res) {
        Musician.find(req.query, function(err, musician) {
            if (err) {
                console.log(err);
            } else {
                res.json(musician);
            }
        });
    });

    app.get("/getSong", function(req, res) {
        Song.find(req.query, function(err, song) {
            if (err) {
                console.log(err);
            } else {
                res.json(song);
            }
        });
    });

    app.post("/putMusician", function(req, res) {
        var newMusician = new Musician(req.body);
        newMusician.save(function(error, data) {
            if (error) console.log(error);
        });
    });

    app.post("/putSong", function(req, res) {
        var newSong = new Song(req.body);
        newSong.save(function(error, data) {
            if (error) console.log(error);
        });
    });

    app.post("/removeMusician", function(req, res) {
        var oldMusician = new Musician(req.body);
        oldMusician.remove(function(error, data) {
            if (error) console.log(error);
        });
    });

    app.post("/removeSong", function(req, res) {
        var oldSong = new Song(req.body);
        oldSong.remove(function(error, data) {
            if (error) console.log(error);
        });
    });

    console.log("Server listening on port 3000."); 

}());