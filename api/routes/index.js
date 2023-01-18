const { Router } = require("express");
const route = Router();


const adminGetProducts = require('./Admin/Products/GetProducts');           //Creada
const adminPostProducts = require('./Admin/Products/PostProducts');         //Creada
const adminDeleteProducts = require('./Admin/Products/DeleteProducts');     //creada
const adminPutProducts = require('./Admin/Products/PutProducts');           //Creada
const adminDeleteUser = require('./Admin/Users/DeleteUsers');
const adminGetUser = require('./Admin/Users/GetUsers');                     //creada
const adminPutLockedUser = require('./Admin/Users/PutLockedUser');
const adminPutUser = require('./Admin/Users/PutUser');
const adminDeleteComment = require('./Admin/PQRS/DeleteComment');
const adminGetComment = require('./Admin/PQRS/GetComment');
const adminPostAnswer = require('./Admin/PQRS/PostAnswer');
const adminPutComment= require('./Admin/PQRS/PutComment');


const register = require('./register')


route.use("/deleteUser",adminDeleteUser)


const register = require('./register');                                     //Creada



route.use("/adminGetProducts", adminGetProducts);
route.use("/adminPostProducts", adminPostProducts);
route.use("/adminDeleteProducts", adminDeleteProducts);
route.use("/adminPutProducts", adminPutProducts);
route.use("/userRegister", register);
route.use("/GetUsers", adminGetUser);


module.exports = route;