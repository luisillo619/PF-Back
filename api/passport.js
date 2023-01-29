const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { CLIENT_ID, CLIENT_SECRET } = process.env;
const Users = require("./models/Users");
//PASO 2
passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback", // este es el que tengo que mandar a llamar en el fron para que me devuelva los datos del ususario
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, cb) {
      Users.findOneAndUpdate(
        { googleId: profile.id },
        { googleId: profile.id },
        { upsert: true, new: true },
        function (err, user) {
          return cb(err, user);
        }
      );
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
