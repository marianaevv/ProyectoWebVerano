const User = require('../models/userModel')
 
module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            return res.redirect('/auth/register')
        }
        res.redirect('/auth/login')
    })
}
/*
const User = require('../models/userModel')

module.exports = (req, res) => {
    //Creating new post
    User.create(req.body,(error, user)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Success",user);
            res.redirect("login");
            res.status(201).json();
            
        }
    });
    
}*/