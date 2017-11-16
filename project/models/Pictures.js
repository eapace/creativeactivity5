var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  name: String,
  caption: String,
  link: String,
  upvotes: {type: Number, default: 0},
});

CommentSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Pictures', CommentSchema);
