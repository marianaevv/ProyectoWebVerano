
const User = require('../models/userModel')

module.exports = async (req, res)=>{
    const users = await  User.find({});
    res.render("userList",{
        users
    });
}

