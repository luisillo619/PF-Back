const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    products: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    Users: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        allownull: false,
      },
    total: {
      type: Number,
      allownull: false,
    }
    
  })
  module.exports = model("Order", orderSchema);