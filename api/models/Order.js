const { Schema, model } = require("mongoose");


//Model Order
const ordersSchema = new Schema({
  amount: {
    type: Number,
    allownull: false,
  },
  total: {
    type: Number,
    allownull: false,
  },

  product: [{ type: Schema.Types.ObjectId, ref: 'Products' }],
  user: { type: Schema.Types.ObjectId, ref: 'Users' }
},
{ versionKey: false })
  
  
module.exports = model("Orders", ordersSchema);