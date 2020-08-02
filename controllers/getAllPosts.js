/*const Post = require('../models/userModel')

module.exports = async (req, res)=>{
    const posts = await  Post.find({});
    res.render("handlePosts",{
        posts
    });
}*/

const Post = require('../models/postModel')

 
module.exports = async (req, res) => {
    const posts = await Post.find({});
 
    res.render("handlePosts", {
        posts
    });
   
} 
