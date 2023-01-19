const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
  {
    paymentMethod:{
        type: String,
        allownull: false,
      },
    expirationDate:{
        type: Date,
        allownull:false,
      },
    CCV:{
        type: Number,
        allownull:false,
    },
    provider:{
          type: String,
          allownull:false,
      },
    accountNumber:{
          type: Number,
          allownull:false,
      },
    users: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
  }

  },
  { versionKey: false })

  module.exports = model("PaymentMethod", paymentSchema);