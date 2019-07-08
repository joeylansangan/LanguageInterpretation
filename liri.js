// code to read and set any environment variables with the dotenv package
require('dotenv').config();

// code required to import the keys.js file and store it in a variable
var keys = require("./keys");
// packege requires..
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');
// moment().format();

// make process.argv into an accesible array
var [node, file, ...args] = process.argv;

// slice the array to skip process.argv[0] & process.argv[1]
// join user input with spaces
console.log("User Search: " + args.slice(1).join(" "))

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
        console.log("\n----------------")
        console.log("\nTitle: " + movie.data.Title);
        console.log("Year: " + movie.data.Year);
        console.log("IMDB Rating: " + movie.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + movie.data.Ratings[1].Value);
        console.log("Country: " + movie.data.Country);
        console.log("Language: " + movie.data.Language);
        console.log("Plot: " + movie.data.Plot);
        console.log("Actors: " + movie.data.Actors);
        console.log("\n----------------\n")
    })
}

function searchBands(bandName){
    axios.get("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp")
    .then(function(bands){
    
        console.log("\n----------------")
        console.log(bands.data.forEach(function(element){
            // given date format is 2019-11-02T19:00:08
            var dateTime = element.datetime;
            // so we split this by T
            var split = dateTime.split("T");
            // then we split the date by "-" which is located at 0 index
            // then join the date without separation
            var date = split[0].split("-").join("")
            console.log(date);

            // var dateFormat = "YYYY/MM/DD";
            // var convertedDate = moment(tourDate, dateFormat);
            // console.log("convert" + convertedDate);

            console.log("\n----------------\n")
            console.log("Name of the Venue: " + element.venue.name)
            console.log("Venue Location: " + element.venue.city + ", " + element.venue.country);       
            // console.log("Date: " + tourDate);
        }));
    })
}

    
    // var dateFormat = "MM/DD/YYYY";
    // var convertedDate = moment(tourDate, dateFormat);

searchBands("pink");

// spotify.search({ type: 'track', query: songName, limit: 5 }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   data.tracks.items.forEach(function(element){
//       console.log("\nArtist: " + element.artists[0].name);
//       console.log("Song: " + songName);
//       console.log("Spotify preview link: " + element.preview_url);
//       console.log("Album: " + element.album.name);
//       console.log("\n----------------\n")
      
//   })
//   });