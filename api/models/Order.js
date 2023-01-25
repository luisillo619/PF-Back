const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    product: [{
      type: Schema.Types.ObjectId,
      ref: 'Products'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    amount: {
        type: Number,
        allownull: false,
      },
    total: {
      type: Number,
      allownull: false,
    }
},
{ versionKey: false })
  
  
module.exports = model("Orders", ordersSchema);