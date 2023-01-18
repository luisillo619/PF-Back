const {Schema, model} = require('mongoose');


//Comentarios de los usuarios sobre los productos comprados
const categorySchema = new Schema({

  category: {
    type: String,
  },

})

module.exports = model('Category', categorySchema);