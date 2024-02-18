const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/Users');

const app=express()
 
app.use(session({
    secret:'SECRET',
    resave:false,
    saveUninitialized:true
})
)

//Connection
// mongoose.connect('mongodb+srv://swayamsoni1905:WIgA3WUjKmCva5e3@cluster0.xyqw43z.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connect('mongodb+srv://swayamsoni1905:WIgA3WUjKmCva5e3@cluster0.xyqw43z.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
const db=mongoose.connection
db.on('error',console.error.bind(console, 'MongoDb connection error:'))
db.once('open',()=>{
    console.log('Coonected to DB');
})

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passport config
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//Routes
app.post('/register',(req,res)=>{
    const {username,password}=req.body
    User.register(new User({username}),password,(err,user)=>{
    if(err){
        return res.status(500).json({error:err.message})
    }
    res.json({message:'Registered Succesfully'})
})
})

app.post('/login', passport.authenticate('local'),(req,res)=>{
    res.json({message:'Login Succesfull'})
})

app.get('/logout', (req, res) => {
    //req.logout();
    res.json({ message: 'Logged out successfully' });
});

const port=3003
app.listen(port,()=>{
    console.log(`Server is on ${port}`);
})



// const express=require('express')
// const passport= require('passport')
// const LocalStrategy=require('passport-local').Strategy
// const session=require('express-session')
// const flash=require('express-flash')
 
// const app=express()
 
// app.use(session({secret:'SECRET',resave:false,saveUninitialized:false}))
 
// app.use(flash())
 
// app.use(passport.initialize())
// app.use(passport.session())
 
// passport.use(
//     new LocalStrategy((username,passport,done)=>{
//         //replace this with your actual authentication logic
//         if(username === 'user' && passport === 'password'){
//             return done(null,{id: 1, username:'user'})
//         }else{
//             return done(null, false,{message:' Incorrect usernamr or password'})
//         }
//     })
// );


