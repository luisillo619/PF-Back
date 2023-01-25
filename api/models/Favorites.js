const { Schema, model } = require("mongoose");


const favoriteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  product: { type: Schema.Types.ObjectId, ref: 'Products' }
});
  

module.exports = model("Favorites", favoriteSchema);