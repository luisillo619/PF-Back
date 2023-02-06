const { Schema, model } = require("mongoose");


const commentsSchema = new Schema({
  comment: String,
  email: String, //comentar esto
  response: String,
 
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },

  rating: {
    type: Number
  },
  
  product: { type: Schema.Types.ObjectId, ref: "Products" },
 
},
{ versionKey: false });


module.exports = model("Comments", commentsSchema);