const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
//const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const { CLIENT_ID, CLIENT_SECRET , CLIENT_GITHUB_SECRET, CLIENT_GITHUB_ID} = process.env;
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
            
            return cb(err, profile);
          }
        );
      else {
        return cb(null, profile);
      }
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: CLIENT_GITHUB_ID,
      clientSecret: CLIENT_GITHUB_SECRET,
      callbackURL: "/auth/github/callback",
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
            
            return cb(err, profile);
          }
        );
      else {
        return cb(null, profile);
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
