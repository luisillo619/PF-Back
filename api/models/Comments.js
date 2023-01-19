const { Schema, model } = require("mongoose");

//Comentarios de los usuarios sobre los productos comprados
const commentsSchema = new Schema({
  comment: String,
  email: String,
  response: String,
  products: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Comments", commentsSchema);