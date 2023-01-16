const { Router } = require("express");
const route = Router();
// llassaa
const router_access = require("./freeAccess");

route.use("/free", router_access);

module.exports = route;
