var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/'); //the first react index.js 
var DIST_DIR = path.join(__dirname, '/client/dist'); //bundle.js where it lives

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015','env']
        }
      }
    ]
  }
};