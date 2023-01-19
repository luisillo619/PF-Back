const { Router } = require("express");
const route = Router();

const adminGetProducts = require("./GetProducts"); //Creada
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



route.use("/deleteUser", adminDeleteUser);

const register = require("./register"); //Creada

// Rutas Admin
route.use("/adminGetProducts", adminGetProducts);
route.use("/adminPostProducts", adminPostProducts);
route.use("/adminDeleteProducts", adminDeleteProducts);
route.use("/adminPutProducts", adminPutProducts);

// rutas adminPQRS
route.use("/adminGetComment", adminGetComment);
route.use("/postComent", postComment);
route.use("/updateComent", putComment);
route.use("/deleteComent", adminDeleteComment);

route.use("/userRegister", register);
route.use("/putUser", adminPutUser);
route.use("/getUsers", adminGetUser);



//favoritos
route.use("/getFav",getFavorites);
route.use("/deleteFav",deleteFavorites);
route.use("/postFav",postFavorites);

//deleteComent

module.exports = route;
