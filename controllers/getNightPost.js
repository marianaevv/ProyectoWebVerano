
const Post = require('../models/postModel')

module.exports = async (req, res)=>{
    const posts = await Post.find({categoria: "Noche"});
    res.render("postsByCategory",{
        posts
    });
}
