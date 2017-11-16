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

router.param('post', function(req, res, next, id) {
  var query = Pictures.findById(id);
  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error("can't find comment")); }
    req.post = post;
    return next();
  });
});

router.get('/post/:post', function(req, res) {
  res.json(req.post);
});


router.put('/post/:post/upvote', function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { return next(err); }
    res.json(post);
  });
});


module.exports = router;
