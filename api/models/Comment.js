const {Schema, model} = require('mongoose');


//Comentarios de los usuarios sobre los productos comprados
const commentSchema = new Schema({
      comment: String,
      email : String,
      asunto: String,
      response: String,
      products: {
            type: Schema.Types.ObjectId,
            ref: 'Products'

        },
      users: {
            type: Schema.Types.ObjectId,
            ref: 'User'
      }
        })



module.exports = model('Comment', commentSchema);