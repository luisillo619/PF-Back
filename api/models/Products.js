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
    news:{
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

    // Opiniones del usuario
   
      // reviews: {
      //   type: Schema.Types.Mixed,
      //   default: {
      //     comment: 0,
      //     rating: 0,
      //     user: "",
      //     userName: "",
      //   },
      // },
  

    // Categoría
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
  },
  { versionKey: false }
);

module.exports = model("Products", productsSchema);
