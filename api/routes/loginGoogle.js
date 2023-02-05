const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const CLIENT_URL = process.env.CLIENT_URL;


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

router.get("/login/success", (req, res) => {
  // console.log("ruta login")
  if (req.user) {
  //  console.log("hay un ususario en la ruta", req.user)
    if(req.user.isBlocked){
      return res.status(401).send("Tu cuenta ha sido bloqueada");
    }
    // console.log("login exitosooooooooooooooooooooo")
    res.status(200).json({
      success: true,
      message: "successfull",
      // user: req.user,
      id: req.user._id,
      status: 200,
      token: generateAuthToken(req.user),
    });
  } 
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile","email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL, //localhost
    failureRedirect: "/login/failed",
  })
);
// GIT
router.get("/github", passport.authenticate("github", { scope: ["profile","email"] }));
//s
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// FACE
router.get("/facebook", passport.authenticate("facebook", { scope: ["profile","email"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);








module.exports = router;
