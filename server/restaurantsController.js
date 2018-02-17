// interact with the model
// interact with google maps api 
const request = require('request');
const {KEY} = require('../.config');
const model = require('./model');



const controller = {
    get: (req, res, place, callback) => {
      
    },
    post: (req, res) => {
        const place = req.body.name;
        const SERVER = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.9759755,-118.39088770000001&radius=1200&type=restaurant&keyword=${place}&key=${KEY}`;
        request(SERVER, function (error, response, body) { // ask google api for the places on a post request
            const restaurants = JSON.parse(response.body);
            console.log('error at restaurantsController request block', error); 
           
            // when you get them send them to the model to save them with a callback
            // -to start the get request when its done saving        
            model.saveRestaurantsToDb(restaurants, place,(err, data)=>{
            //   callback();
              res.send(data);
            });
            
        });
        // res.send('success');
    }
};


exports.controller = controller;

