const express = require('express');
const router = express.Router();
const {controller} = require('./restaurantsController');

// router.get('/place', controller.get);

router.post('/place', controller.post);
// router.post('/place', function(req,res){
//     console.log('heeeey')
//     res.send(201);
// });

exports.router = router;