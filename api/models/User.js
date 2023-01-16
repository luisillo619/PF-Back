const { Schema, model } = require('mongoose');
//const userinfo = require('./UserInfo.js');
// const routines = require('./Routines.js');


//Datos de los usuarios que van a comprar
const userSchema = new Schema({
    // Products: [products],     //Así se hace la relación entre tablas en MongoDB
    // userinfo: [userinfo],     //Así se hace la relación entre tablas en MongoDB

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
    
    plan: {     //Plan para los usuarios con el fin de tener prioridad en evíos y promociones
        type: String,
        enum: ['Free', 'Premium'],
        default: 'normal'
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
    // premium : {
    //     type : Boolean
    // },


    //Administrador (Empresa)
    superAdmin : {
      type : Boolean,
      default : false
    },
    admin: {
      type: Boolean,  
      default: false
  },
});


module.exports = model('User', userSchema);