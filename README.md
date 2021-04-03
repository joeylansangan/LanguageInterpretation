# Language Interpretation and Recognition Interface (LIRI)

Backend application made with **Node** and **JavaScript** where a user can input commands to return data. <br>
Spotify music and Axios news API integrated

### Available commands:

* spotify-this-song
* concert-this
* movie-this
* do-what-it-says

### How to use App

You will be using the Command Line to enter available commands and results wil be displayed in the terminal. Input is not case sensitive.

1. Install required packages
 >* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
 >* [Axios API](https://www.npmjs.com/package/axios)
 >* [DotEnv](https://www.npmjs.com/package/dotenv)
 >* [Moment](https://www.npmjs.com/package/moment)
2. Run the app by entering ```node liri.js```
 >* This will show the parameters LIRI can take
3. You can check the latest concerts of an artist by entering: ```liri.js concert-this 'ARTIST_NAME``` <br>
The terminal will return: 
 >* Venue name
 >* Location
 >* Date of last 3 concerts
4. You can access the Spotify API to get information of a song by entering: ```node liri.js spotify-this-song 'SONG_NAME'``` <br>
The terminal will return: 
 >* Artist
 >* Song title
 >* Album
 >* Link to a song preview
4. You can get movie information by entering: ```node liri.js movie-this 'movie nam'``` <br>
The terminal will return: 
 >* Title
 >* Release Year
 >* IMDB rating
 >* Rotten Tomatoes rating
 >* Country of production
 >* Languages available
 >* Plot
 >* Movie cast
