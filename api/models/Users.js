const { Schema, model } = require("mongoose");


//Datos de los usuarios que van a comprar
const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    //Usuario
    docIdentity: {
      type: Number,
      // required: true,
    },
    userName: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    signupDate: {
      //fecha de registro
      type: Date,
      default: Date.now(),
    },
    lastLogin: {
      //fecha del ultimo login
      type: Date,
    },
     admin: {
      type: Boolean,
      default: false,
    }, 
    isBlocked: {
      type: Boolean, 
      default: false 
    },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Favorites" }],
    address: [{ type: Schema.Types.ObjectId, ref: "Address" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
},
{ versionKey: false });


module.exports = model("Users", userSchema);
