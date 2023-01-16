const {Schema, model} = require('mongoose');


//Comentarios de los usuarios sobre los productos comprados
const commentSchema = new Schema({
      name : String,
      comment: String,
      email : String,
      asunto: String,
      response: String,
      //response: String,
      //response: String,
      //response: String,
      products: {
            type: Schema.Types.ObjectId,
            ref: 'Products'
        }
    
});



module.exports = model('Comment', commentSchema);