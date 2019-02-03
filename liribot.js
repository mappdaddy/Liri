require(".env").config();
const axios = require('axios');
const command = process.argv[2];
const value = process.argv[3];
const Spotify = require('node-spotify-api');
 
const spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
 
function getMeSpotify(item){
    spotify.search({ type: 'track', query: item }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
      
}




function getMyBands(artist){



const url = "https://rest.bandsintown.com/artists/"+ artist +"/events?"
        axios.get(url, {
            params: {
             app_id: 'codingbootcamp'
            }
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

 }

 if(command === 'concert-this'){
     getMyBands(value);
 }
  if (command === "spotify-this-song"){
      getMeSpotify(value);
  }
