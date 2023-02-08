const { Router } = require("express");
const route = Router();
//ADMIN
const adminDeleteComment = require("./Admin/Comments Admin/DeleteComment");
const adminDeleteProducts = require("./Admin/Products/DeleteProducts");
const adminPostProducts = require("./Admin/Products/PostProducts");
const adminPutProducts = require("./Admin/Products/PutProducts");
const adminDeleteUser = require("./Admin/Users/DeleteUsers");
const adminGetUser = require("./Admin/Users/GetAllUsers");
const adminPutLockedUser = require("./Admin/Users/PutLockedUser");
const adminPutUser = require("./Admin/Users/PutUser");
const adminChangeUser = require("./Admin/Users/ChangeAdmin"); 
//ORDER
const deleteOrder = require("./Order/DeleteOrder");
const getNumberProducts = require("./Order/GetNumberProducts");
const getOrderDetails = require("./Order/GetOrderDetails");
const postOrder = require("./Order/PostOrder");
const postOrderStripe = require("./Order/PostOrderStripe")
const putQuantityOrder = require("./Order/PutQuantityOrder")
const userAllOrders = require("./Order/AllOrders")
//USERr
const userDeleteAddress = require("./User/Address/DeleteAddress");
const userGetAddress = require("./User/Address/GetAddress");
const userPostAddress = require("./User/Address/PostAddress");
const userPutAddress = require("./User/Address/PutAddress");
const deleteFavorites = require("./User/Fav/DeleteFav");
const getFavorites = require("./User/Fav/GetFav");
const postFavorites = require("./User/Fav/PostFav");
const getAccountProfile = require("./User/InfoPerfilUser/GetAccountProfile");
const userPostCompleteInfo = require("./User/InfoPerfilUser/PostCompleteInfo");
const userDeleteAccount = require("./User/Delete/DeleteAccount");
//const putPassword= require('./User/Info Perfil User/PutPassword');

//AMBOS
const adminGetCategories = require("./GetCategories");
const adminGetComment = require("./GetComment");
const adminIdProducts = require("./GetProductId");
const adminGetProducts = require("./GetProducts");
const login = require("./login");
const loginGoogle = require("./loginGoogle.js");
const postComment = require("./PostComment");
const putComment = require("./PutComment");
const register = require("./register");
const deleteCookies = require("./DeleteCookies")
/*--------------Rutas--------------*/
//ADMIN
route.use("/deleteComment", adminDeleteComment);
route.use("/adminDeleteProducts", adminDeleteProducts);
route.use("/adminPostProducts", adminPostProducts);
route.use("/adminPutProducts", adminPutProducts);
route.use("/deleteUser", adminDeleteUser); //Si
route.use("/getAllUsers", adminGetUser); //Si
route.use("/adminPutLockedUser", adminPutLockedUser);
route.use("/putUser", adminPutUser);
route.use("/adminChangeUser", adminChangeUser);
//ORDER
route.use("/deleteOrder", deleteOrder);
route.use("/getNumberProducts", getNumberProducts);
route.use("/getOrderDetails", getOrderDetails);
route.use("/postOrder", postOrder);
route.use("/postOrderStripe", postOrderStripe)
route.use("/putQuantityOrder", putQuantityOrder)
route.use("/allOrders", userAllOrders);
//USER
route.use("/deleteAddress", userDeleteAddress);
route.use("/getAddress", userGetAddress);
route.use("/postAddress", userPostAddress);
route.use("/putAddress", userPutAddress); //Si
route.use("/deleteFav", deleteFavorites);
route.use("/getFav", getFavorites);
route.use("/postFav", postFavorites);
route.use("/getAccountProfile", getAccountProfile);
route.use("/postCompleteInfo", userPostCompleteInfo);
route.use("/deleteAccount", userDeleteAccount);
//route.use("/putPassword", putPassword);
//RUTAS DE AMBOS
route.use("/adminGetCategories", adminGetCategories);
route.use("/adminGetComment", adminGetComment);
route.use("/producId", adminIdProducts);
route.use("/adminGetProducts", adminGetProducts);
route.use("/login", login);
route.use("/auth", loginGoogle);
route.use("/postComent", postComment);
route.use("/updateComent", putComment);
route.use("/register", register); //Si
route.use("/deleteCookies",deleteCookies)
module.exports = route;
