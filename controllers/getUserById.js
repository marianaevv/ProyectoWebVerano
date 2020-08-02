const User = require('../models/userModel')

module.exports = async (req, res)=>{
    const userId = req.params.id;
    const user = User.findById(userId, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.status(201).json(result);
         /*   res.render("index",{
                user
            });*/
       }
    })
}
/*
module.exports = async (req, res)=>{
    const users = await  User.find({});
    res.render("index",{
        users
    });
    }
*/