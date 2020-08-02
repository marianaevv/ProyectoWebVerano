const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const fileUpload = require('express-fileupload');
const auth = require("./middleware/auth");
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getAllPosts = require('./controllers/getAllPosts')
const createUserController = require("./controllers/createUser");
const storeUserController = require('./controllers/storeUser');
const loginController = require("./controllers/login");
const loginUserController = require('./controllers/loginUser');
const logoutController = require("./controllers/logout");
const getUserPostsController = require('./controllers/getUserPosts');
const getUserByIdController = require('./controllers/loginUser');
const deletePostController = require('./controllers/deletePost');
const editPageController = require('./controllers/editPage');
const editPostController = require('./controllers/editPost');
const getAllUsers = require('./controllers/getAllUsers');
const deleteUserController = require('./controllers/deleteUser');
const getPostController = require('./controllers/getPostById');
const homePageAdminController = require('./controllers/homePageAdmin');
const getRecreacionalPosts = require('./controllers/getRecreacionalPosts');
const getNightPost = require('./controllers/getNightPost');
const getNaturePost = require('./controllers/getNaturePost');
const categoriasPageController = require('./controllers/categoriesPage');
const searchController = require('./controllers/search')
//const getUserPostsController = require('./controllers/logout');
//const loadMisPublicaciones = require('./controllers/misPublicaciones');

const app = new express();

const mongoStore = connectMongo(expressSession);
 
app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));
app.use(fileUpload());
app.set('view engine', 'ejs');
app.use(function(req, res,next){
    res.locals.auth = req.session.userId;
    next()
}) 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

//Static file path to images folder
app.use(express.static(__dirname+'/assets'));

app.get("/", homePageController);
app.get("/admin", homePageAdminController);
app.get("/post/:id", getPostController);
app.get("/createPost",auth, createPostController);
app.post("/posts/store/:id",auth, storePostController);
app.get("/auth/register", createUserController);
app.post("/users/register", storeUserController);
app.get('/auth/login',redirectIfAuthenticated, loginController);
app.post('/users/login',redirectIfAuthenticated, loginUserController);
app.get("/auth/logout", logoutController);
app.get("/getUserById/:id",getUserByIdController);
app.get("/misPublicaciones", getUserPostsController);
app.get('/delete/:id', deletePostController);
app.get('/edit/:id',editPageController);
app.post('/edit/:id', editPostController);
app.get('/allUsers', getAllUsers);
app.get('/deleteUser/:id',deleteUserController);
app.get('/allPosts', getAllPosts);
app.get('/postsRecreacionales', getRecreacionalPosts);
app.get('/postsNaturaleza', getNaturePost);
app.get('/postsNoche', getNightPost);
app.get('/categorias', categoriasPageController);
app.get('/search', searchController);
//DB CONNECTION
app.listen( 8080, () => {
    console.log( 'Sever on port ', 8080);

    const settings = {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    };

    new Promise( (resolve, reject) => {
        mongoose.connect( 'mongodb+srv://admin:admin1996@cluster0.vmukv.mongodb.net/viaergosumdb?retryWrites=true&w=majority', settings, ( err ) => {
            if ( err ){
                reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err =>{
        mongoose.disconnect();
        console.log( err );
    });
})