const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");

// Passport to use email as the username field
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: "Email not recognized." });
        }

        const isValid = user.validatePassword(password);
        if (!isValid) {
          return done(null, false, { message: "Invalid password." });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
