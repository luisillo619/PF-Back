const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "891112283904-ivhk3ppgbskf2c87gtg38cct141pt8n9.apps.googleusercontent.com",
      clientSecret: "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",
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
