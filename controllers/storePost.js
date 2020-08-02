const path = require('path')
const Post = require('../models/postModel')
const User = require('../models/userModel');
module.exports = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const user = await User.findById(userId);
        const {image} = req.files
        const newPost = new Post(req.body);
        //newPost.owner = user;
        image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
            Post.create({
                ...req.body,
                owner: user,
                image: `/posts/${image.name}`
            }, (error, post) => {
                res.redirect("/");
            });
        })
        user.posts.push(newPost)
        await user.save();
        res.redirect('/')
    }catch(err){
        next(err);
    }
}/*
const Post = require('../database/models/postModel')

module.exports = async (req, res)=>{
    const post = await  Post.findById(req.params.id);
    res.render("post",{
        post
    });
}
*/
/*
module.exports  = async (req, res, next)=> {
    try{
        const userId = req.params.id;
        //Creating new post
        const newPost = new Post(req.body);
        //Get user owner of the post
        const user = await User.findById(userId);
        //Assign user to post
        newPost.owner = user;
        //Save the post
        await newPost.save();
        //Add post to the user writting the post
        user.posts.push(newPost)
        //Save the user
        await user.save();
        res.redirect('/')
        res.status(201).json();

    }catch(err){
        next(err);
    }
}*/