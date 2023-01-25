const { Schema, model } = require("mongoose");


//Comentarios de los usuarios sobre los productos comprados
const commentsSchema = new Schema({
  comment: String,
  // email: String,
  response: String,
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  rating: {
    type: Number
  }
},
{ versionKey: false });


module.exports = model("Comments", commentsSchema);