const { Router } = require("express");
const route = Router();


const adminGetProducts = require('./Admin/Products/GetProducts');
const adminPostProducts = require('./Admin/Products/PostProducts');
const adminDeleteProducts = require('./Admin/Products/DeleteProducts');
const adminPutProducts = require('./Admin/Products/PutProducts');
const adminDeleteUser = require('./Admin/Users/DeleteUsers');
const adminGetUser = require('./Admin/Users/GetUsers');
const adminPutLockedUser = require('./Admin/Users/PutLockedUser');
const adminPutUser = require('./Admin/Users/PutUser');
const adminDeleteComment = require('./Admin/PQRS/DeleteComment');
const adminGetComment = require('./Admin/PQRS/GetComment');
const adminPostAnswer = require('./Admin/PQRS/PostAnswer');
const adminPutComment= require('./Admin/PQRS/PutComment');

const register = require('./register')


route.use("/deleteUser",adminDeleteUser)



route.use("/adminGetProducts", adminGetProducts);
route.use("/adminPostProducts", adminPostProducts);
route.use("/adminDeleteProducts", adminDeleteProducts);
route.use("/adminPutProducts", adminPutProducts);
route.use("/userRegister", register);


module.exports = route;