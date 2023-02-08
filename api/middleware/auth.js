const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
require("dotenv").config();

// para autenticar que el ususario esta luego
const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
 
  if (!token)
    return res.status(401).send("Access denied. Not authenticated...");
  
  try {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey); // me junta el objeto de req, con la codificacion del token, por eso sigue teniendo la propiedad admin
  
    req.user = decoded;
    const user = Users.findById(decoded.id);

    if (user.isBlocked) {
      return res.status(401).send("Tu cuenta ha sido bloqueada");
    }
    else next(); // ejecuta la funcion del tercer parametro de auth en isUser y isAdmin
  } catch (ex) {
    res.status(400).send("Invalid auth token...");
  }
};

// For User Profile
const isUser = (req, res, next) => {
  auth(req, res, () => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("Access denied. Not authorized...");
    }
  });
};

// For Admin
const isAdmin = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("Access denied. Not authorized...");
    }
  });
};

module.exports = { auth, isUser, isAdmin };
