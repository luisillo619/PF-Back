const { Schema, model } = require("mongoose");

//Comentarios de los usuarios sobre los productos comprados
const categoriesSchema = new Schema({
  category: {
    type: String,
  },
});

module.exports = model("Categories", categoriesSchema);
