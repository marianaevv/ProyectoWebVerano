

module.exports('/edit/:id',   async(req,res) =>{
    const task = await Task.findById(req.params.id);
    res.render('edit', {task});
    })