require('dotenv').config();
require("../../config/database.js");

const cities = require("../../models/cities.js");

module.exports = async (req, res) => {
  let data = await cities.updateOne({
    _id: req.params.id
  }, {
    name: req.body.name,
    country: req.body.country,
    lang: req.body.lang,
    currency: req.body.currency,
    flag: req.body.flag,
    description: req.body.description,
    img: req.body.img,
  });
  res.send(data);
};