const $ = require('jquery');
const SERVER = 'http://localhost:3000/place';
exports.aj = {
    get: (keyWord,callback)=>{
      $.get(SERVER, {keyWord},(data)=>{
        console.log('this is the data from get ajax', data);
        callback(data);
      }) 
    },
    post: (keyWord, callback)=>{
      console.log('key woooord', keyWord);
       $.post(SERVER, {keyWord},(data)=>{
          callback(keyWord);  // initiating a get request after the post is done
          console.log('posted', data);
       });
    }
}; 