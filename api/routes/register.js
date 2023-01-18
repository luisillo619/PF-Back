const bcrypt = require("bcrypt");
const User = require("../models/User");
const express = require("express");
const register = express.Router();
const jwt = require("jsonwebtoken");


// Genera el token de cada ususario en cada registro
const generateAuthToken = (user) => {
  const jwtSecretKey = "!dA+Ikay6kHPX$ph9XF@Ak&VBcHGQSrD7csV@4m#VYv%";
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    jwtSecretKey
  );

  return token;
};

register.post("/", async (req, res) => {
  const { userName, email, password } = req.body;
  //   const schema = Joi.object({
  //     name: Joi.string().min(3).max(30).required(),
  //     email: Joi.string().min(3).max(200).required().email(),
  //     password: Joi.string().min(6).max(200).required(),
  //   });

  // const { error } = schema.validate(req.body);

  if (userName && email && password) {
    let userName2 = await User.findOne({ userName: userName });
    let userEmail2 = await User.findOne({ email: email });

    if (userEmail2 && userName2) {
      res.status(404).send("Username and email already in use");
    } else if (userEmail2 && !userName2) {
      res.status(404).send("Email already in use");
    } else if (!userEmail2 && userName2) {
      res.status(404).send("Username already in use");
    } else {
      const user = new User({ userName, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();
      const token = generateAuthToken(user);

      res.send({userName, password, token});
    }
  } else {
    res.status(404).send("datos incompletos");
  }
});


module.exports = register;