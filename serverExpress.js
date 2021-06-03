const express = require("express");
const path = require("path");
let ejs = require("ejs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.redirect("/homeoffice");
});

app.get("/klima", (req, res) => {
  res.render("klima.ejs");
});

app.get("/homeoffice", (req, res) => {
  res.render("homeoffice.ejs");
});

app.get("/zeit", (req, res) => {
  res.render("zeit.ejs");
});

app.get("/bildung", (req, res) => {
  res.render("bildung.ejs");
});

app.get("/zusammenhalt", (req, res) => {
  res.render("zusammenhalt.ejs");
});

app.get("/homeoffice", (req, res) => {
  res.render("homeoffice.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
