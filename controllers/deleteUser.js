const User = require('../models/userModel')
module.exports = async (req, res) => {
    var id = req.params.id;
    await User.remove({_id: id});
    res.redirect('/allUsers');
}