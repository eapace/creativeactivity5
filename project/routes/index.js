var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pictures = mongoose.model('Pictures');


router.get('/post', function(req, res, next) {
  Pictures.find(function(err,pictures){
	if(err){return next(err);}
  	res.json(pictures);
  });
});

router.post('/post', function(req,res,next){
	var pictures = new Pictures(req.body);
	pictures.save(function(err,pictures){
		if(err){return next(err);}
		res.json(pictures);
	});
});

module.exports = router;
