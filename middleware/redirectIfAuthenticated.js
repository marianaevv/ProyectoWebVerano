const User = require('../models/userModel')
 
module.exports = (req, res, next) => {
    if (req.session.userId) {
        return res.redirect('/')
    }
 
    next()
}