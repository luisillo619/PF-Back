const { Schema, model } = require("mongoose");

//Comentarios de los usuarios sobre los productos comprados
const addressSchema = new Schema(
  {
    Country: {
      type: String,
      allowNull: false,
    },
    City: {
      type: String,
      allowNull: false,
    },
    State: {
      type: String,
      allowNull: false,
    },

    Street: {
      type: String,
      allowNull: false,
    },
    ZipCode:{
        type: Number,
        allowNull: false,

    },
    user: {
            type: Schema.Types.ObjectId,
            ref: 'Users'
    },
},
{ versionKey: false });

    },    
    
});




module.exports = model('Address', addressSchema);