const { Schema, model } = require("mongoose");
//const userinfo = require('./UserInfo.js');
// const routines = require('./Routines.js');

//Datos de los usuarios que van a comprar
const userSchema = new Schema({

    //Usuario
    docIdentity: {
      type: Number,
      required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        unique : true,
        required: true
    },
    signupDate: {    //fecha de registro
        type: Date,
        default: Date.now()
    },   
    lastLogin: {//fecha del ultimo login
        type: Date
    },
    fav : [{
      id : {
        type : String 
      }
    }],
    feedback: {
      type : String
    },
    status : {
      type : String,
      enum: ['Active', 'inactive'],
      default: 'Active'
    },
    admin: {
      type: Boolean,  
      default: false
=======
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
  fav: [
    {
      id: {
        type: String,
      },
    },
  ],
  feedback: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Active", "inactive"],
    default: "Active",
  },

  //Administrador (Empresa)
  admin: {
    type: Boolean,
    default: false,

  },
});

module.exports = model("User", userSchema);
