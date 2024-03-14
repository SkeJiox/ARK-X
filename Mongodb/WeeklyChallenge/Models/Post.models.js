const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }
});

const Post = mongoose.model("Post",PostSchema);

module.exports= Post;

