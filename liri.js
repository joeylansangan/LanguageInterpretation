// code to read and set any environment variables with the dotenv package
require("dotenv").config();

// code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
// packege requires..
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');



// variable that retrieves your spotify information via keys.js
var spotify = new Spotify(keys.spotify);

function searchSpotify(songName){

  spotify
  .search({ type: 'track', query: songName, limit: 5}, function(err,data){
      if (err){
          return console.log("Error occured: " + err);
      }
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
}