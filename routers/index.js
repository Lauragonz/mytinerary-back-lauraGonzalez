const Router = require("express").Router;
const citiesRouter = require("./cities.js");

let router = Router();

router.use("/cities", citiesRouter);

module.exports = router;