const { response } = require("express");
const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const bodyParser = require("body-parser");
const routes = require("./routes/main");
const Slider = require("./models/Slide");
const Service = require("./models/service");
// static/css/Style.css
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/static", express.static("public"));
app.use("", routes);

// app.get("/", (req, res) => {
//   res.send("wow this is data from server");
// })
//db connections
mongoose.connect(
  "mongodb+srv://saad:saadatlas@cluster1.mpagpcd.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("db connected");
    // Service.create([
    //   {
    //     icon: "fa-brands fa-affiliatetheme",
    //     title: "Provide Best Courses",
    //     description:
    //       "We provide courses that help our student in learning and in placement",
    //     linkText: "https://www.learncodewithsaad.com",
    //     link: "Check",
    //   },
    //   {
    //     icon: "fa-brands fa-accusoft",
    //     title: "learn projects",
    //     description:
    //       "We provide courses that help our student in learning and in placement",
    //     linkText: "https://www.learncodewithsaad.com",
    //     link: "learn",
    //   },
    //   {
    //     icon: "fa-brands fa-accusoft",
    //     title: "learn projects",
    //     description:
    //       "We provide courses that help our student in learning and in placement",
    //     linkText: "https://www.learncodewithsaad.com",
    //     link: "learn",
    //   },
    // ]);

    // Slider.create([
    //   {
    //     title: "learn java script in very easy manner",
    //     Subtitle: "javascript is the most famous language in programming",
    //     imagesUrl: "/static/images/code image.jpg",
    //   },
    //   {
    //     title: "what is Django in python?",
    //     Subtitle: "django is the famous framework in python",
    //     imagesUrl: "/static/images/coding images.jpg",
    //   },
    //   {
    //     title: "what is node js?",
    //     Subtitle:
    //       "node js is the run time environment to execute javascript outside browser",
    //     imagesUrl: "/static/images/coode image.jpg",
    //   },
    // ]);

    // Detail.create({
    //   brandName: "Info technical solution",
    //   brandIconUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlI75Axqw6qVq1NhHQV_hbpeIanqSd8spUvrf_SmFl&s",
    //   links: [
    //     {
    //       label: "Home",
    //       url: "/",
    //     },
    //     {
    //       label: "services",
    //       url: "/services",
    //     },
    //     {
    //       label: "Gallery",
    //       url: "/gallery",
    //     },
    //     {
    //       label: "About",
    //       url: "/about",
    //     },
    //     {
    //       label: "Contact Us",
    //       url: "/contact-us",
    //     },
    //   ],
    // });
  }
);

//template engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");
app.listen(process.env.PORT | 5556, () => {
  console.log("server started successfully");
});
