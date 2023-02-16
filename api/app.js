require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const routes = require("./routes/index");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Users = require("./models/Users");
const mailSettings = require("./additional/nodemailer");
const jwt = require("jsonwebtoken");
const { CLIENT_URL, CLIENT_ID, CLIENT_SECRET } = process.env;

const generateAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY; //
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.userName,
      email: user.email,
      isAdmin: user.admin,
    },
    jwtSecretKey,
    {
      expiresIn: "1h",
    }
  );
  return token;
};

const app = express();

app.use(
  session({
    secret: "mi-secreto",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 3600000, // duración de la sesión en milisegundos
      sameSite: "none",
      path:"/"
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      const user = await Users.findOne({
        email: profile._json.email,
      });

      if (!user) {
        const transporter = mailSettings.transporter;
        const mailDetails = mailSettings.mailDetails(profile._json.email);
        transporter.sendMail(mailDetails, (error, info) => {
          if (error) {
            console.log("Error al enviar email de confirmación", error);
          } else {
            console.log(
              "Correo de confirmación enviado a",
              profile._json.email
            );
          }
        });

        await Users.create(
          {
            email: profile._json.email,
            name: profile._json.given_name,
            lastName: profile._json.family_name,
            loginBy: "Google",
          },
          (err, user) => {
            console.log("Usuario creado", user);
            return cb(err, user);
          }
        );
      } else {
        console.log("Usuario existente", user);
        return cb(null, user);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serializar", user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", CLIENT_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/auth/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

app.get("/auth/login/success", (req, res) => {
  try {
   
    if(req.session.passport){
      console.log("sesiooooon",req.session)
      if (Object.keys(req.session.passport).length !== 0) {
        console.log("hay un ususario en la ruta", req.session.passport.user);
        if (req.session.passport.user.isBlocked) {
          return res.status(401).send("Tu cuenta ha sido bloqueada");
        }
    
        return res.status(200).json({
          id: req.session.passport.user._id,
          token: generateAuthToken(req.session.passport.user),
          type: req.session.passport.user.admin,
        });
      }
      return;
    }
  } catch (error) {
    console.log(error)
  }
 
  
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    // sesión creada exitosamente
    // req.session = express-session
    // req.user = passport
    successRedirect: CLIENT_URL,
    failureRedirect: `${CLIENT_URL}/login`,
  })
);

app.use("/", routes);

module.exports = app;
