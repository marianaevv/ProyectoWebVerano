
const Post = require('../models/postModel');
const User = require('../models/userModel');
module.exports = async (req, res)=>{
    const {userId} = req.session;
    const user = await User.findById(userId);

    //const onepost = await Post.findById(user.posts[0]._id);
    //const userPosts = await Post.findById(onepost);
    const posts = await Post.find({owner: user._id});
   // const posts = JSON.parse(JSON.stringify(postss));
    res.render("myPosts",{posts});
    //const posts = user.posts;
}



/*
const Post = require('../models/postModel')
const User = require('../models/userModel')
 
module.exports = async (req, res) => {
    const posts = await Post.find({});
 
    res.render("index", {
        posts
    });
   
} */
