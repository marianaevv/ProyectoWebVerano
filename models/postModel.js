const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({
    lugar: String,
    pais: String,
    estado: String,
    ciudad: String,
    descripcion: String,
    categoria: String,
	image: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }
});
 
const Post = mongoose.model('posts', PostSchema);
 
module.exports = Post;