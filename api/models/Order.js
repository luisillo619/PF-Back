const { Schema, model } = require("mongoose");


const orderSchema = new Schema(
  {
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'Products'
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref:'Users'
    },
    subtotal: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
    
  },
  { versionKey: false })
  
  module.exports = model("Order", orderSchema);


  
  