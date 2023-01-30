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
    promotion: {
      type: Schema.Types.Mixed,
      default: {
        salesOff: false,
        stock: 0,
        newPrice: 0,
        oldPrice: 0,
      },
    },
    isDeleted: { type: Boolean, default: false },
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Products", productsSchema);
