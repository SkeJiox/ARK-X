const Post= require('../Models/Post.models');

const getallpost = (req,res) => {
	pageSize = 3;
  pageNumber= req.params.p;
	Post.find()
	.skip((pageSize - 1)* pageNumber)
	.limit(pageSize)
	.then(posts => {res.json(posts);
  })  .catch(err => {
		console.log(err);
		res.status(500).json({ error: 'Something went wrong' });
});
};

const postbyid = async (req, res,next) => {
		const post = await Post.findById(req.params.id);
    if (post) {
		res.json(post)
} else{
		const err = new Error('post not found');
		next(err)
}
};

const createtpost = async (req, res) => {
	try {
		const { title, description, author } = req.body;
		const newPost = new Post({ title, description, author });
		const savedPost = await newPost.save();
		res.json(savedPost);
} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Post not saved' });
}
};

	const updatepost = async (req,res) => {
try{
		const { title, description, author } = req.body;
    const post = await Post.findOneAndUpdate({ title: title },
			 { description: description, author: author }, { new: true });
      await post.save();
      res.json(post);
    } catch { (err => console.log('error ', err))}
    };

	const deletepost = async (req,res) => {
  try{
		 let Id = req.params.id;
	 const post = await Post.findByIdAndDelete(Id);
   await post.save(); 
	 res.send('deleted succesfully'); }
   catch{ (error) => console.log('error', error)
	 }
	 };


	module.exports = { getallpost, createtpost , postbyid, updatepost,  deletepost}