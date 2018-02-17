const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants'); //not sure if this is good

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
  console.log(`we're connected!`) 
});

const restaurantSchema = mongoose.Schema({
    _id: String,
    name: String,
    address: String,
    stars: Number,
    keyWord : String
  });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Restaurant.remove({}, function(err) { //dropping database
//   console.log('collection removed') 
// });

// //test record
// const test = new Restaurant({_id: 1, name:'Pizza rest', address:'123', stars: 4});
// test.save();

const save = (restaurants, searchKeyWord,callback) => {
  // console.log('!!!!!', restaurants);
  
  const restaurantModels = restaurants.map((restaurant)=>{
    return new Restaurant({
      _id : restaurant.id,
      name : restaurant.name,
      address : restaurant.vicinity,
      stars: restaurant.rating,
      keyWord: searchKeyWord
    });
  });
  console.log('the damn array',restaurantModels);
  Restaurant.insertMany(restaurantModels, {ordered:false},(err, data)=>{ //ask about ordered
    if(err){
      console.log('err at database.js while saving',err);
    }
    console.log('Data at database.js saving', data);
    callback(err, data);
  });

};

// Restaurant.find(function (err, restaurants) {
//   if (err) return console.error(err);
//   console.log(restaurants);
// });

const getRestauransts = (restaurant, callback) =>{
  // let lookUpRegex = new RegExp(restaurant);
  Restaurant.
  find({}).
  where('keyWord').equals(restaurant).   //not sure if it's gonna work
  limit(5).
  sort('-stars').
  select('').
  exec(callback);
};

exports.getRestauransts = getRestauransts;
exports.save = save;