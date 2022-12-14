const mongoose = require("mongoose");
const { schema } = require("./Detail");

const Service = mongoose.Schema({
  icon: String,
  title: String,
  description: String,
  linkText: String,
  link: String,
});
module.exports = mongoose.model("services", Service);
