const { Schema, model } = require("mongoose");


const paymentSchema = new Schema({
  paymentMethod:{
    type: String,
    allownull: false,
  },
  expirationDate:{
    type: Date,
    allownull: false,
  },
  CVV:{
    type: Number,
    allownull: false,
  },
  provider:{
    type: String,
    allownull: false,
  },
  cardNumber:{
    type: Number,
    allownull: false,
  },

  user: { type: Schema.Types.ObjectId, ref: 'Users' }
},
{ versionKey: false })


module.exports = model("PaymentMethod", paymentSchema);