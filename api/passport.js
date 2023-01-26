const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { CLIENT_ID,CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID:
      CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
