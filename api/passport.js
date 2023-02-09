const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mailSettings = require("./additional/nodemailer");
const passport = require("passport");
require("dotenv").config();
const {
  CLIENT_ID,
  CLIENT_SECRET,
  CLIENT_GITHUB_SECRET,
  CLIENT_GITHUB_ID,
  CLIENT_FACEBOOK_ID,
  CLIENT_FACEBOOK_SECRET,
} = process.env;

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
      const user = await Users.findOne({
        // loginBy: "Google",
        email: profile._json.email,
      });
      // console.log("login GOGLEEEEEEEEEEEEEEEEEEEEEE");
      console.log("estoy en pasport")
      if (!user) {
        const transporter = mailSettings.transporter;
        const mailDetails = mailSettings.mailDetails(profile._json.email);
        transporter.sendMail(mailDetails, (error, info) => {
          if (error) {
            res.status(500).send("Error al enviar email de confirmación");
          } else {
            res.status(200).send("Account creada con éxito.");
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
            console.log("creadoooo", user)
            return cb(err, user);
          }
        );
      } else {
        console.log("existenteee", user)
        return cb(null, user);
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
      const user = await Users.findOne({
        loginBy: "Github",
        userName: profile._json.login,
      });
      if (!user) {
        await Users.create(
          {
            name: profile._json.name.split(" ")[0],
            lastName: profile._json.name.split(" ")[1],
            userName: profile._json.login,
            loginBy: "Github",
          },
          (err, user) => {
            console.log(user);
            return cb(err, user);
          }
        );
        
      } else {
        return cb(null, user);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: CLIENT_FACEBOOK_ID,
      clientSecret: CLIENT_FACEBOOK_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      // PROBAR LO DEL CORREO
      const user = await Users.findOne({ loginBy: "Facebook" });

      if (!user) {
        Users.create(
          {
            name: profile._json.name.split(" ")[0],
            lastName: profile._json.name.split(" ")[1],
            userName: profile._json.login,
            loginBy: "Facebook",
          },
          (err, user) => {
            return cb(err, user);
          }
        );
        // const transporter = mailSettings.transporter;
        // const mailDetails = mailSettings.mailDetails(email);
        // transporter.sendMail(mailDetails, (error, info) => {
        //   if (error) {
        //     console.log(error);
        //     return res
        //       .status(500)
        //       .send("Error al enviar email de confirmación");
        //   } else {
        //     return res.status(200).send("Account creada con éxito.");
        //   }
        // });
      } else {
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
