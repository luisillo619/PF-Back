const { Schema, model } = require("mongoose");


const commentsSchema = new Schema({
  comment: String,
  // email: String,
  response: String,
  rating: {
    type: Number
  },
  
  product: { type: Schema.Types.ObjectId, ref: "Products" },
  user: { type: Schema.Types.ObjectId, ref: "Users" }
},
{ versionKey: false });


module.exports = model("Comments", commentsSchema);