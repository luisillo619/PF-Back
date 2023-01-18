const express = require('express');                                 //Instalar
const cors = require('cors');        
const routes = require('./routes/index.js'); //TODAS LAS RUTAS 
require('dotenv').config();
              //Componentes
// const authRoutes = require('./routes/authRoutes.js');               //Componentes
// const authGoogleRoutes = require('./routes/authGoogleRoutes.js');   //Componentes
// const adminRoutes = require('./routes/adminRoutes.js');             //Componentes
// const superAdminRoutes = require('./routes/superAdminRoutes');      //Componentes
const jwt = require('jsonwebtoken');                                //Instalar
const querystring = require('node:querystring');                    //Instalar
const User = require('./models/User.js');

const { SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI } = process.env;     //Variables de entorno


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({origin: '*'}));
app.use((req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

  });

  app.use('/', routes); // SE LE AGREGAN TODAS LAS RUTAS AL APP

//   function getGoogleURL(){
//    const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth';
//    const options = {
//      redirect_uri : REDIRECT_URI,
//      client_id : GOOGLE_CLIENT_ID,
//      access_type : 'offline',
//      response_type : 'code',
//      prompt : 'consent',
//      scope : [
//       'https://www.googleapis.com/auth/userinfo.profile',
//       'https://www.googleapis.com/auth/userinfo.email'
//      ].join(' ')
//    };
//    return `${rootURL}?${querystring.stringify(options)}`;
//   }

  


//   app.use('/authGoogle', authGoogleRoutes); //Rutas para los que estan logeados con google

//   app.use((req, res, next) => {
//     const header = req.headers['authorization'];
//     const token = header && header.split(' ')[1]
//      jwt.verify(token, '' + SECRET, (err, decoded)=> {
//       if(err) {
//          return res.status(403).json({message : err.message })
//       }
//       req.user = decoded
//       next()
//      })
//   });

// app.use('/auth', authRoutes); //Rutas para usuarios logeados con credenciales, si queres acceder a estas rutas van a necesitar un JWT

// app.use(async (req,res,next) => {
//     const {id} = req.user
//     const user = await User.findOne({_id:id})
//   if(!user.admin){
//     return res.status(404).send('You are not a admin user')
//   } 
//   next()
// })

// app.use('/admin', adminRoutes);

// app.use(async (req,res,next) => {
//   const {id} = req.user
//     const user = await User.findOne({_id:id})
//   if(!user.superAdmin){
//     return res.status(404).send('You are not a superAdmin user')
//   } 
//   next()
// });

// app.use('/superAdmin', superAdminRoutes);


// module.exports = app

// });


//Rutas para el archivo 'adminRoutes'
// app.use(async (req,res,next) => {
//     const {id} = req.user
//     const user = await User.findOne({_id:id})
//   if(!user.admin){
//     return res.status(404).send('You are not a admin user')
//   } 
//   next()
// });
// app.use('/admin', adminRoutes);


// //Rutas para el archivo 'authGoogleRoutes'
// function getGoogleURL(){
//   const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth';
//   const options = {
//     redirect_uri : REDIRECT_URI,
//     client_id : GOOGLE_CLIENT_ID,
//     access_type : 'offline',
//     response_type : 'code',
//     prompt : 'consent',
//     scope : [
//     'https://www.googleapis.com/auth/userinfo.profile',
//     'https://www.googleapis.com/auth/userinfo.email'
//     ].join(' ')
//   };
//   return `${rootURL}?${querystring.stringify(options)}`;
// };
// app.use('/authGoogle', authGoogleRoutes); //Rutas para los que estan logeados con google


// //Rutas para el archivo 'authRoutes'
// app.use((req, res, next) => {
// const header = req.headers['authorization'];
// const token = header && header.split(' ')[1]
//     jwt.verify(token, '' + SECRET, (err, decoded)=> {
//     if(err) {
//         return res.status(403).json({message : err.message })
//     }
//     req.user = decoded
//     next()
//     })
// });
// app.use('/auth', authRoutes); //Rutas para usuarios logeados con credenciales, si queres acceder a estas rutas van a necesitar un JWT


// //Rutas para el archivo 'superAdminRoutes'
// app.use(async (req,res,next) => {
//   const {id} = req.user
//     const user = await User.findOne({_id:id})
//   if(!user.superAdmin){
//     return res.status(404).send('You are not a superAdmin user')
//   } 
//   next()
// });
// app.use('/superAdmin', superAdminRoutes);


module.exports = app;