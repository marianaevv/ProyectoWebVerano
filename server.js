const express = require('express');
const { PORT } = require('./config');
const rutas = require('./src/routes/routes');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {DATABASE_URL} = require('./config');
const mongoose = require('mongoose');
const jsonParser = bodyParser.json();

// Init
const app = express();
app.use(express.static("public"));

// Middlewares 
app.use(morgan('dev'));


// Routes
app.use('/', rutas );

// Starting server
app.listen( PORT, () => {
    console.log( 'Sever on port ', PORT);

    const settings = {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    };

    new Promise( (resolve, reject) => {
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
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