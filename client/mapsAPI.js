const $ = require('jquery');
const SERVER = 'http://localhost:3000/place';
exports.aj = {
    get: (callback)=>{
      console.log('about to make a get request');
      $.get(SERVER, (err, data)=>{
        if(err){ 
          console.log('error at ajax get!!',err);
        }
        callback(data);
      }) 
    },
    post: (keyWord, callback)=>{
      console.log('key woooord', keyWord);
       $.post(SERVER, {keyWord},(data)=>{
        
          callback();
          
          console.log('posted', data);
       });
    }
}; 