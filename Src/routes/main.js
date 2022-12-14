const { request, response } = require("express");
const express = require("express");
const async = require("hbs/lib/async");
const contact = require("../models/contact");

const routes = express.Router();

const Detail = require("../models/Detail");
const service = require("../models/service");
const Slider = require("../models/Slide");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "63942a065e9901a7643bf091" });
  const slides = await Slider.find();
  const services = await service.find();
  // console.log(details);
  // console.log(slides);
  res.render("index", {
    details: details,
    slides: slides,
    services: services,
  });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "63942a065e9901a7643bf091" });
  res.render("gallery", {
    details: details,
  });
});
// process contact form
routes.post("/process-contact-form", async (request, response) => {
  console.log("form is submitted");
  console.log(request.body);
  // save the data in database
  try {
    const data = await contact.create(request.body);
    console.log(data);
    response.redirect("/");
  } catch (e) {
    console.log(e);
    response.redirect("/");
  }
});

module.exports = routes;
