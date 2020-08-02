
const Post = require('../models/postModel')

module.exports = async (req, res)=>{
    const posts = await Post.find({categoria: "Naturaleza"});
    console.log(posts);
    res.render("postsByCategory",{
        posts
    });
}
