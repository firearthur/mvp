// interact with the model
// interact with google maps api 
const request = require('request');
const {KEY} = require('../.config');
const model = require('./model');



const controller = {
    get: (req, res) => {
      console.log('req query !!!!', req.query);
      if(req.body){  
      console.log('request !!!!!!!!!!! from get', req.body);  
      
      model.getRestaurantsFromDb(req.query.keyWord, (data, err)=>{
        // model.getRestaurantsFromDb(req.query.name, (data, err)=>{
          if(err){
            console.log('err at restaurantController line 17' ,err);  
          }
          console.log('request !!!!!!!!!!!', req.body);
          console.log('this is the restaurants but the name of var is data', data);
          res.send(data);
        });
      } 
    },
    post: (req, res) => {
        const place = req.body.keyWord || req.body.name;
        const SERVER = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.9759755,-118.39088770000001&radius=1200&type=restaurant&keyword=${place}&key=${KEY}`;
        console.log('here is the place!!!!', place);
        request(SERVER, function (error, response, body) { // ask google api for the places on a post request
            const restaurants = JSON.parse(response.body);  
            model.saveRestaurantsToDb(restaurants, place,(err, data)=>{
            //   callback();
            
              res.sendStatus(201);
            //   res.send(data);
            });
            
        });
        // res.send('success');
    }
};


exports.controller = controller;

