
const Post = require('../models/postModel')
module.exports = async (req,res) =>{
    var  id = req.params.id;
    console.log(req.body);
    await Post.update({_id: id}, req.body);
    res.redirect('/');
    }