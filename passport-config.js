const LocalStrategy = require('passport-local').Strategy

fucntion

function initialize (passport){
    const authenticateUser = (email, password, done) =>{
        const user = getUserByEmail
    }
passport.use(new LocalStrategy({emailField: 'email'}), authenticateUser)
passport.serializeUser((user,done)=>{})
passport.desirializeUser((id,done)=>{})
}