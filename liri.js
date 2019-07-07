// code to read and set any environment variables with the dotenv package
require('dotenv').config();

// code required to import the keys.js file and store it in a variable
var keys = require("./keys");
// packege requires..
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');


// make process.argv into an accesible array
var [node, file, ...args] = process.argv;

// slice the array to skip process.argv[0] & process.argv[1]
// join user input with spaces
console.log(args.slice(1).join(" "))

// variable that retrieves your spotify information via keys.js
var spotify = new Spotify(keys.spotify);

// if/else statement to run searchSpotify()
if(args[0] === "spotify-this-song"){
    if (args[1] === undefined){
        searchSpotify("creep");
    }
    else{
        var songTitle = args.slice(1).join(" "); 
        searchSpotify(songTitle);
    }
}

// if/else statement to run searchMovie()
if(args[0] === "movie-this"){
    if (args[1] === undefined){
        searchSpotify("shrek");
    }
    else{
        var movieTitle = args.slice(1).join(" "); 
        searchMovie(movieTitle);
    }
}

// spotify function
function searchSpotify(songName){

    spotify.search({ type: 'track', query: songName, limit: 5 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      data.tracks.items.forEach(function(element){
          console.log("\nArtist: " + element.artists[0].name);
          console.log("Song: " + songName);
          console.log("Spotify preview link: " + element.preview_url);
          console.log("Album: " + element.album.name);
          console.log("\n----------------\n")
          
      })
      });

}

// movie function

function searchMovie(movieName){
    apiKey = "f7e57d25";

    axios.get("http://www.omdbapi.com/?t=" + movieName + "&apikey=" + apiKey)
    .then(function(movie){
        console.log("\nTitle: " + movie.data.Title);
        console.log("Year: " + movie.data.Year);
        console.log("Spotify preview link: " + element.preview_url);
        console.log("Album: " + element.album.name);
        console.log("\n----------------\n")
    })
}

searchMovie("shrek");

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.