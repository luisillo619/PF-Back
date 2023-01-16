const { Router } = require("express");
const route = Router();
// llassa
const router_access = require("./admin/freeAccess");
const route_crea = require("./admin/createdProducts")
const route_elimina= require('./admin/delete')
const route_put= require('./admin/put')


route.use("/free", router_access);
route.use("/crea", route_crea);
route.use("/eliminar", route_elimina);
route.use("/actualizar", route_put);


module.exports = route;