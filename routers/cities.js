const Router = require("express").Router;

const listCities = require("../controllers/cities/list.js");
const readCity = require("../controllers/cities/read.js");
const deleteCity = require("../controllers/cities/delete.js");
const createCity = require("../controllers/cities/create.js");
const updateCity = require("../controllers/cities/update.js");

let router = Router();

router.get("/", listCities);

router.get("/:id", readCity);

router.post("/", createCity);

router.put("/:id", updateCity);

router.delete("/:id", deleteCity);


module.exports = router;