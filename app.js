const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("mmdaae", {});
});
app.get("/tools", (req, res) => {
  res.render("tools", {});
});

app.get("/navbar_test", (req, res) => {
  res.render("navbar_test", {});
});

app.get("/Information", (req, res) => {
  res.render("Information", {});
});

app.get("/mdaae", (req, res) => {
  res.render("mdaae", {});
});

app.get("/mmdaae", (req, res) => {
  res.render("mmdaae", {});
});

app.get("/food_new", (req, res) => {
  res.render("food_new1", {});
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.get("/member", (req, res) => {
  res.render("member", {});
});

app.get("/reservation", (req, res) => {
  res.render("reservation", {});
});

app.get("/reservation_new", (req, res) => {
  res.render("reservation_new", {});
});

app.listen(port, () => {
  console.log("server open: ", port);
});
