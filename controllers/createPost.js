module.exports = (req, res) => {
    if (req.session.userId) {
       // return res.render("createPost");
        const {userId} = req.session;
    res.render("createPost",{
        userId
    });

    }else{
         res.redirect('/login')
    }
};