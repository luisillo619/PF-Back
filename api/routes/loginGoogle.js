const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY; //
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.userName,
      email: user.email,
      isAdmin: user.admin,
    },
    jwtSecretKey
  );
  return token;
};
// En este punto el ususario esta logeado por google
router.get("/login/success", async (req, res) => {
  // let user = await User.findOne({ email: email });
  // if (!user) return res.status(400).send("Invalid email or password...");

  // ver si es admin o no con el middleware auth isUser and isAdmin, unicamente generamos el token aqui mismo y mandar el token por res, despues automaticamente se va a hacer la verificiacion del mismo archivo poniendolo en cada ruta que sea necesaria

  // el token necesita llevar lo de admin
  try {
    if (req.user) {
      let userIsAdmin = { email: req.user.emails[0].value };
      if (req.user.emails[0].value === "luiscarlosrangellagunes@gmail.com") {
        userIsAdmin.admin = true;
      }
      console.log(userIsAdmin);
      const token = generateAuthToken(userIsAdmin);
      res.send({ user: req.user._json, token: token });
    } else {
      res.status(403).json({ error: true, message: "Not Authorized" });
    }
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
 
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

// aqui esta la autenticacion por google
router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/home");
});

module.exports = router;
