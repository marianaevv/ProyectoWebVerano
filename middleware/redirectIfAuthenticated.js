const User = require('../models/userModel')
 
module.exports = (req, res, next) => {
    if (req.session.userId) {
        if(req.session.userId === "5f21031775426a4aa86a224b"){
             res.redirect("/admin");
        }else{
           
            res.redirect('/')
        }
       // return res.redirect('/')
    }
 
    next()
}