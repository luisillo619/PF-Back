const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

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
// PASO 4, UNA VEZ QUE LA AUTH SEA EXITOSA, ME TRAE LOS DATOS DEL USUSARIO
router.get("/login/success", async (req, res) => {
  try {
    if (req.user) {
      const userEmail = req.user._json.email;
      const user = await User.findOne({ email: userEmail });
      if (User.isBlocked === true) {
        return res.status(401).send("Usuario bloqueado");
      }

      const token = await generateAuthToken(user);
      res.send({ token, id: user._id });
    } else {
      res.status(401).json("Not Authorized");
    }
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

// aqui esta la autenticacion por google
router.get("/google", passport.authenticate("google", ["profile", "email"]));

//PASO 3
//SE EJECUTA DESPUES DE QUE EL USUSARIO DE CLICK EN SU CUENTA Y VERIFICA QUE LA AUTENTICACION SEA CORRECTA. POR ULTIMO CREA AL USUSARIO SI EL LOGIN FUE EXITOSO
//passport.authenticate es un midelware
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login/failed",
  }),
  async (req, res) => {
    const userEmail = req.user._json.email;
    const name = req.user._json.name;
    let user = await User.findOne({ email: userEmail });
    if (!user) {
      await User.create({ name, email: userEmail });
    }
    res.redirect("http://localhost:3000/home?auth=true");
  }
);

// DESLOGEARSE
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/home");
});

// FALLO LA AUTH
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

module.exports = router;
