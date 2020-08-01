
const Post = require('../models/postModel')

module.exports = async (req, res)=>{
    const posts = await Post.find({categoria: "Recreacional"});
    res.render("postsByCategory",{
        posts
    });
}
