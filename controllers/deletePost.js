const Post = require('../models/postModel')
module.exports = async (req, res) => {
    var id = req.params.id;
    console.log(id);
    await Post.remove({_id: id});
    res.redirect('/');
}