
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
    // OTRA TABLA AQUI PONER REF: products
    category: {
      type: String,
      enum: [
        "Mates",
        "Bombillas",
        "Matepa",
        "Materas",
        "Yerberas",
        "Combos",
        "Corkscrew",
        "Wine set",
        "Knives",
        "Bottle saver gallonado",
      ],
    },
    stock: {
      type: Number,
    },
    news: {
      type: String,
    },

    offert: {
      type: Schema.Types.Mixed,
      default: {
        offert: false,
        stock: 0,
        newPrice: 0,
        oldPrice: 0,
      },
    },
    review: {
      type: Schema.Types.Mixed,
      default: {
        comment: 0,
        rating: 0,
        user: "",
      },
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Products", productsSchema);