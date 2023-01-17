
const { Schema, model } = require("mongoose");

const productsSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    stock: {
      type: Number,
    },
    news: {
      type: String,
    },

    salesOff: {
      type: Schema.Types.Mixed,
      default: {
        salesOff: false,
        stock: 0,
        newPrice: 0,
        oldPrice: 0,
      },
    },
    reviews: {
      type: Schema.Types.Mixed,
      default: {
        comment: 0,
        rating: 0,
        userName: "",
      },
    },
    createdInDb: {
      type: Boolean,
      defaultValue: true,
      allowNull: false,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
  },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Products", productsSchema);