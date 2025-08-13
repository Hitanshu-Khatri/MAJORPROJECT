if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}
const GoogleStrategy = require('passport-google-oauth20').Strategy;
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
const Listing = require("./models/listing.js");


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
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists with Google
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // If email exists with local account, optionally link it
        let existingUser = await User.findOne({ email: profile.emails[0].value });
        if (existingUser) {
          existingUser.googleId = profile.id;
          await existingUser.save();
          return done(null, existingUser);
        }

        // Otherwise create a new account
        user = await User.create({
          googleId: profile.id,
          username: profile.emails[0].value,
          displayName: profile.displayName,
          email: profile.emails[0].value
        });
      }

      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));  
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

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
// Start Google OAuth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback from Google
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/'); // redirect wherever you want after login
  }
);

 // GET /search?query=delhi
app.get("/search", async (req, res) => {
  const query = req.query.query;
  if (!query) return res.json([]);

  try {
    const regex = new RegExp(query, "i"); // case-insensitive
    const results = await Listing.find({
      $or: [{ title: regex }, { location: regex }, { country: regex }]
    }).limit(5).select("title _id");

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});

//Error handling MIDDLEWARE

// app.all("*",(req,res,err)=>{
//     res.status(404).send({msg:"Page Not Found"});
// });
app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something Error"}= err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("Error.ejs", { err });
});

