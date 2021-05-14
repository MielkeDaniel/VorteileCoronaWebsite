const express = require("express");
const path = require("path");
let ejs = require("ejs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/klima", (req, res) => {
  res.render("klima.ejs");
});

app.get("/", (req, res) => {
  res.redirect("/homeoffice");
});

app.get("/homeoffice", (req, res) => {
  res.render("homeoffice.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
