const Post = require('../models/postModel')
const User = require('../models/userModel')
 
module.exports = async (req, res) => {
    //eval(require("locus"));
    const posts = await Post.find({});
 
    res.render("index", {
        posts
    });
   
} 

/*const users = User.findById(req.session.userId);
    res.render("createPost",{
        users
    });*/