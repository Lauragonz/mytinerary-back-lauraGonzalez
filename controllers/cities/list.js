require('dotenv').config();
require("../../config/database.js");

const cities = require("../../models/cities.js");

module.exports = async (req, res) => {
  let data = await cities.find();
  res.send(data);
};