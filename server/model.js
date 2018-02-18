const db = require('../db/database');

const getRestaurantsFromDb = (restaurant, callback)=>{ //give restaurants back from db
  console.log('this is restaurant from model', restaurant);
  db.getRestauransts(restaurant, (err, restaurants)=>{ 
    console.log('this is restaurant from model 2', restaurant);
      if(err){
        console.log('error at model', err);
      }
      if(restaurants){
        console.log('these are the restaus i got from query', restaurants);
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



