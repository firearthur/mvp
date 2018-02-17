const db = require('../db/database');

const getRestaurantsFromDb = (restaurant, callback)=>{ //give restaurants back from db
  db.getRestauransts(restaurant, (err, restaurants)=>{ 
      if(err){
        throw err;
      }
      if(restaurants){
        callback(restaurants);
      }
  });
};


const saveRestaurantsToDb = ({results}, searchKeyWord,callback) =>{ //receive restaurants from cntrl and save to db 
  let restaurants = results;
  db.save(restaurants, searchKeyWord,callback);
};

exports.saveRestaurantsToDb = saveRestaurantsToDb;
exports.getRestaurantsFromDb =getRestaurantsFromDb;



