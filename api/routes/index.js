const { Router } = require("express");
const route = Router();


//ADMIN
const adminDeleteComment = require("./Admin/Comments Admin/DeleteComment");
const adminDeleteProducts = require("./Admin/Products/DeleteProducts"); //creada
const adminPostProducts = require("./Admin/Products/PostProducts"); //Creada
const adminPutProducts = require("./Admin/Products/PutProducts"); //Creada
const adminDeleteUser = require("./Admin/Users/DeleteUsers");
const adminGetUser = require("./Admin/Users/GetAllUsers"); //creada
// const adminPutLockedUser = require("./Admin/Users/PutLockedUser");
const adminPutUser = require("./Admin/Users/PutUser");


//ORDER
const deleteOrder = require("./Order/DeleteOrder");
const getOrder = require("./Order/GetOrder");
const postOrder = require("./Order/PostOrder");


//USER
const userDeleteAddres = require("./User/Address/DeleteAddress");
const userGetAddres = require("./User/Address/GetAddress");
const userPostAddres = require("./User/Address/PostAddress");
const userPutAddres = require("./User/Address/PutAddress");
const deleteFeedback = require("./User/Comments/DeleteFeedback");
const deleteAccount = require("./User/Delete/DeleteAccount");
const deleteFavorites = require("./User/Fav/DeleteFav");
const getFavorites = require("./User/Fav/getFav");
const postFavorites = require("./User/Fav/PostFav");
const getAccountProfile = require("./User/InfoPerfilUser/GetAccountProfile");
const userPostCompleteInfo = require("./User/InfoPerfilUser/PostCompleteInfo")
//const putPassword= require('./User/Info Perfil User/PutPassword');
const putUserInfoEdit = require("./User/InfoPerfilUser/PutUserInfoEdit");


//AMBOS
const adminGetCategories = require("./GetCategories")
const adminGetComment = require("./GetComment");
const adminIdProducts = require("./getProducId");
const adminGetProducts = require("./GetProducts"); //Creada
const login = require("./login")
const loginGoogle = require("./loginGoogle.js")
const postComment = require("./PostComment");
const putComment = require("./PutComment");
const register = require("./register"); //Creada


/*--------------Rutas--------------*/
//ADMIN
route.use("/deleteComent", adminDeleteComment);
route.use("/adminDeleteProducts", adminDeleteProducts);
route.use("/adminPostProducts", adminPostProducts);
route.use("/adminPutProducts", adminPutProducts);
route.use("/deleteUser", adminDeleteUser);
route.use("/getUsers", adminGetUser);
//route.use("/adminPutLockedUser", adminPutLockedUser);
route.use("/putUser", adminPutUser);


//ORDER
route.use("/deleteOrder",deleteOrder);
route.use("/getOrder",getOrder);
route.use("/postOrder", postOrder);


//USER
route.use("/deleteAddres", userDeleteAddres);
route.use("/getAdres", userGetAddres);
route.use("/postAdres", userPostAddres);
route.use("/putAdress", userPutAddres);
route.use("/deleteFeedback", deleteFeedback);
route.use("/deleteAccount", deleteAccount);
route.use("/deleteFav", deleteFavorites);
route.use("/getFav", getFavorites);
route.use("/postFav", postFavorites);
route.use("/getAccountProfile", getAccountProfile);
route.use("/postCompleteInfo", userPostCompleteInfo);
//route.use("/putPassword", putPassword);
route.use("/putUserInfoEdit", putUserInfoEdit);


//RUTAS DE AMBOS
route.use("/adminGetCategories", adminGetCategories)
route.use("/adminGetComment", adminGetComment);
route.use("/producId", adminIdProducts);
route.use("/adminGetProducts", adminGetProducts);
route.use("/loginCorreo", login);
route.use("/auth",loginGoogle)
route.use("/postComent", postComment);
route.use("/updateComent", putComment);
route.use("/register", register);


module.exports = route;