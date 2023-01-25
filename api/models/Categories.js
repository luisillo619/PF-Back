const { Schema, model } = require("mongoose");


const categoriesSchema = new Schema({
  category: {
    type: String,
  }
},
{ versionKey: false });


module.exports = model("Categories", categoriesSchema);