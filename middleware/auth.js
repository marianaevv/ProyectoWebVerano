const User = require('../models/userModel')
 
module.exports = (req, res, next) => {
    User.findById("5f21031775426a4aa86a224b", (error, user) => {
        if (error || !user) {
            return res.redirect('/')
        }
 
        next()
    })
}