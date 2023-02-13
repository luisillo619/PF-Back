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
// req.user solo va a existir una vez, esto debido a las cookies que configuramos en la app por 1 hora
//req.user va a existir despues de 1 hora o si se deslogea y se vuelve a logear
router.get("/login/success", (req, res) => {
  const username = req.session.user
  console.log("username", username)
  console.log("ando aqui en login suces", req.user)
// console.log(req.user)
  if (username) {
    console.log("triston")
  //  console.log("hay un ususario en la ruta", req.user)
    if(username.isBlocked){
      return res.status(401).send("Tu cuenta ha sido bloqueada");
    }
    // console.log("login exitosooooooooooooooooooooo")
    res.status(200).json({
      id: username._id,
      token: generateAuthToken(username),
      type: username.admin
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
  passport.authenticate("google"),async (req,res)=>{
    console.log("antes de redireccionar", req.user)
    req.session.user = await req.user;
    if(req.user) res.redirect(CLIENT_URL)
 
  }
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
