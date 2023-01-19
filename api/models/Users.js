const { Schema, model } = require("mongoose");

//Datos de los usuarios que van a comprar
const userSchema = new Schema(
  {
    //Usuario
    docIdentity: {
      type: Number,
      // required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
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

    feedback: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "inactive"],
      default: "Active",
    },

    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },

    fav: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    //Administrador (Empresa)
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = model("Users", userSchema);
