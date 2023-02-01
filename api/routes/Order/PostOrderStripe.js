const express = require("express");
const postOrder = express.Router();
const Stripe = require("stripe")(process.env.SECRET_KEY_STRIP);

postOrder.post("/", async (req, res) => {
  let status, error;
  try {
    const { token, amount } = req.body;

    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    status = "succes";

   
  } catch (err) {
    status = "failure";
    res.status(500).send(error);
  }
});

module.exports = postOrder;
