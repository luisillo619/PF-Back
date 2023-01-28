const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { CLIENT_ID,CLIENT_SECRET } = process.env;

//PASO 2
passport.use(
  new GoogleStrategy(
    {
      clientID:
      CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback", // este es el que tengo que mandar a llamar en el fron para que me devuelva los datos del ususario
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      // ESTO SE EJECUTA A LA PAR DE LA RUTA CALLBACK, CUANDO SE DE CLICK EN ALGUNA CUENTA, HACE LA VERIFICACION DE SI AUTH FUE EXITOSO O NO 
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
