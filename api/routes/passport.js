const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: config.get("googleClientID"),
      clientSecret: config.get("googleClientSecret"),
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Find or create user in your database
      User.findOrCreate({ googleId: profile.id }, (err, user) => {
        return done(err, user);
      });
    }
  )
);


router.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, generate JWT
    const token = jwt.sign({ id: req.user.id }, config.get("jwtSecret"), { expiresIn: 3600 });
    res.redirect(`http://localhost:3000/home?token=${token}`);
  }
);