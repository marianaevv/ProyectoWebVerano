const User = require('../models/userModel')
 
module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            return res.redirect('/auth/register')
        }
        res.redirect('/auth/login')
    })
}