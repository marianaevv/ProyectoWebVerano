const mongoose = require( 'mongoose' );

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required: true
    }
});

mongoose.pluralize(null);

const userModel = mongoose.model( 'users', userSchema );

const Users = {
    createUser : function( newUser ){
        return userModel
        .create( newUser )
        .then( user => {
            return user;
        })
        .catch( err => {
            throw new Error( err.message );
        }); 
    },
    getUserByEmail: function( email ){
        return userModel
        .findOne( { email } )
        .then( user => {
            return user;
        })
        .catch( err => {
            throw new Error( err.message );
        }); 
    },
    deleteUser : function(email){
        return userModel
        .deleteOne({email : email})
        .then( results =>{
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    getUser : function() {
        return userModel
        .find()
        .then( todosLosClientes => {
            return todosLosClientes;
        })
        .catch( err => {
            return err;
        });
    },
}

module.exports = {
    Users
};