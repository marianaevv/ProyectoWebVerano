const Post = require('../models/postModel')
 
module.exports = async (req, res) => {
    const posts = await Post.find({});
 
    res.render("indexAdmin", {
        posts
    });
   
} 