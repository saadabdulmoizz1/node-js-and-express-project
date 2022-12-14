const mongoose = require("mongoose");

const Slider = mongoose.Schema({
  title: String,
  Subtitle: String,
  imagesUrl: String,
  class: String,
});

module.exports = mongoose.model("slider", Slider);
