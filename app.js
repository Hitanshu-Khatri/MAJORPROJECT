if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;
const path = require ("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const listingRouter=require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");



main()
.then(()=>{console.log("connected to DB")})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect(dbUrl);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.engine('ejs', ejsMate);


const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{secret:process.env.SECRET},
    touchAfter:24 * 3600,
});

store.on("error",function(e){
    console.log("Session Store Error",e);
});


const sessionOptions = {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge:7 * 24 * 60 * 60 * 1000, 
        httpOnly:true,
    }
};








//Routes
app.listen(8080,()=> {
    console.log("Server is Listening on port 8080");
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
  
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currentUser = req.user;
    next();
});


app.get("/demouser",async(req,res)=>{
    let fakeUser = new User ({
        username:"demouser",
        email:"random@gmail.com"
    });
    
    let registeredUser = await User.register(fakeUser,"demouser"); 
    res.send(registeredUser);
});
app.get("/",(req,res)=>{
    res.redirect("/listings"); 
});

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);
 

//Error handling MIDDLEWARE

// app.all("*",(req,res,err)=>{
//     res.status(404).send({msg:"Page Not Found"});
// });
app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something Error"}= err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("Error.ejs", { err });
});

