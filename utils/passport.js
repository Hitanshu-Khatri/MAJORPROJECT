const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User'); // your existing User model

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
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