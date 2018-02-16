const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants'); //not sure if this is good

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
  console.log(`we're connected!`) 
});

const restaurantSchema = mongoose.Schema({
    _id: Number,
    name: String,
    address: Number,
    stars: Number
  });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Restaurant.remove({}, function(err) { //dropping database
//   console.log('collection removed') 
// });

// //test record
// const test = new Restaurant({_id: 1, name:'Pizza rest', address:'123', stars: 4});
// test.save();

const save = (restaurants) => {
  const restaurantModels = restaurants.map((restaurant)=>{
    return new Restaurant({
      _id : restaurant.id,
      name : restaurant.name,
      address : restaurant.vicinity,
      starts: restaurant.rating
    });
  });
  new Restaurant.insertMany(restaurantModels, {ordered:false},(err, data)=>{ //ask about ordered
    if(err){
      console.log('err at database.js while saving',err);
    }
    console.log('Data at database.js saving', data);
  });

};

Restaurant.find(function (err, restaurants) {
  if (err) return console.error(err);
  console.log(restaurants);
})

