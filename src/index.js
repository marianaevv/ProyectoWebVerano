const express = require('express');
const { PORT } = require('./config');

const app = express();


// Starting server

app.listen( PORT, () => {
    console.log( 'Sever on port ', PORT);
})