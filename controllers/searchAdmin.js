
const Post = require('../models/postModel');
const User = require('../models/userModel');
module.exports = async (req, res)=>{
    const term = req.query.search
    console.log(term);
  //  const posts = await Post.find({lugar: term});
   const posts = await Post.find({$text: {$search: term}})
    res.render("searchResAdmin",{posts});
}
