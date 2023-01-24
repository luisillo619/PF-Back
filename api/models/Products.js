const { Schema, model } = require("mongoose");

const productsSchema = new Schema(
  {
    // Información básica del producto
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

    // Estado de existencias
    stock: {
      type: Number,
    },

    // Novedad
    news: {
      Type: Boolean,
      default: false,
    },

    // Promociones
    promotions: {
      type: Schema.Types.Mixed,
      default: {
        salesOff: false,
        stock: 0,
        newPrice: 0,
        oldPrice: 0,
      },
    },

    //hacer comments similar a ruta postFavorites
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],

    // Categoría
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
    isDeleted: { type: Boolean, default: false }
  },
  { versionKey: false }
);

module.exports = model("Products", productsSchema);
