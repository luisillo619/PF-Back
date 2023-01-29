const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { CLIENT_ID, CLIENT_SECRET } = process.env;
const Users = require("./models/Users");
const mongoose = require("mongoose");
//PASO 2
passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback", // este es el que tengo que mandar a llamar en el fron para que me devuelva los datos del ususario
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      const user = await Users.findOne({ email: profile._json.email });
      // console.log(profile)
      if (!user)
        Users.create(
          {
            email: profile._json.email,
            name: profile._json.given_name,
            lastName: profile._json.family_name,
          },
          (err, user) => {
            
            return cb(err, user);
          }
        );
      else {
        return cb(null, user);
      }
    }
  )
);

//ESTO SON LAS COOKIES

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
