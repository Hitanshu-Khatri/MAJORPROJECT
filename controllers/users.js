const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

module.exports.signup = async (req, res) => {
    try {
        let { username, password, email } = req.body;
        const newUser = new User({ username, email });
        let registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });
        
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

};

module.exports.renderSignupForm = (req, res) => {
    res.render("./users/signup.ejs");
};

module.exports.renderLoginForm = (req,res)=>{
    res.render("./users/login.ejs");    
};

module.exports.login =async(req,res)=>{
    req.flash("success","Welcome to Wanderlust!! You are logged in");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out");
        res.redirect("/listings");
    });
};