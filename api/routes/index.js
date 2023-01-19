const { Router } = require("express");
const route = Router();

const adminGetProducts = require("./GetProducts"); //Creada
const adminIdProducts = require("./getProducId");
const adminPostProducts = require("./Admin/Products/PostProducts"); //Creada
const adminDeleteProducts = require("./Admin/Products/DeleteProducts"); //creada
const adminPutProducts = require("./Admin/Products/PutProducts"); //Creada
const adminDeleteUser = require("./Admin/Users/DeleteUsers");
const adminGetUser = require("./Admin/Users/GetAllUsers"); //creada
// const adminPutLockedUser = require("./Admin/Users/PutLockedUser");
const adminPutUser = require("./Admin/Users/PutUser");
const adminDeleteComment = require("./Admin/Comments Admin/DeleteComment");
const adminGetComment = require("./GetComment");
const postComment = require("./PostComment");
const putComment = require("./PutComment");
const getFavorites = require("./User/Fav/getFav");
const deleteFavorites = require("./User/Fav/DeleteFav");
const postFavorites = require("./User/Fav/PostFav");

const deleteFeedback = require("./User/Comments/DeleteFeedback");
const deleteAccount = require("./User/Delete/DeleteAccount");
const getAccountProfile = require("./User/InfoPerfilUser/GetAccountProfile");
//const putPassword= require('./User/Info Perfil User/PutPassword');
const putUserInfoEdit = require("./User/InfoPerfilUser/PutUserInfoEdit");

const userGetAddres = require("./User/Address/GetAddress");
const userPostAddres = require("./User/Address/PostAddress");
const userDeleteAddres = require("./User/Address/DeleteAddress");
const userPutAddres = require("./User/Address/PutAddress");

route.use("/deleteUser", adminDeleteUser);

const register = require("./register"); //Creada
const login = require("./login");

// Rutas Admin producId
route.use("/adminGetProducts", adminGetProducts);
route.use("/producId", adminIdProducts);
route.use("/adminPostProducts", adminPostProducts);
route.use("/adminDeleteProducts", adminDeleteProducts);
route.use("/adminPutProducts", adminPutProducts);

// rutas adminPQRS
route.use("/adminGetComment", adminGetComment);
route.use("/postComent", postComment);
route.use("/updateComent", putComment);
route.use("/deleteComent", adminDeleteComment);

route.use("/register", register);
route.use("/login", login);
route.use("/putUser", adminPutUser);
route.use("/getUsers", adminGetUser);

//favoritos
route.use("/getFav", getFavorites);
route.use("/deleteFav", deleteFavorites);
route.use("/postFav", postFavorites);

//deleteComent

//adrres putAdress
route.use("/getAdres", userGetAddres);
route.use("/postAdres", userPostAddres);
route.use("/deleteAddres", userDeleteAddres);
route.use("/putAdress", userPutAddres);

//fav

// lo otro
route.use("/deleteFeedback", deleteFeedback);
route.use("/deleteAccount", deleteAccount);
route.use("/getAccountProfile", getAccountProfile);
route.use("/putUserInfoEdit", putUserInfoEdit);

module.exports = route;
