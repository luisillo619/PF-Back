const { Schema, model } = require("mongoose");

//Model Order
const ordersSchema = new Schema(
  {
    amount: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Products" },
        quantity: 0,
        unitPrice: 0,
        image: ""
      },
    ],

    total: {
      type: Number,
      allownull: false,
    },

    product: [{ type: Schema.Types.ObjectId, ref: "Products" }],
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    status: { type: Schema.Types.ObjectId, ref: "Status" },
  },
  { versionKey: false }
);

module.exports = model("Orders", ordersSchema);
