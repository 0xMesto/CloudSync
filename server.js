// server.js
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
      res.render("index");
});

app.get("/about", (req, res) => {
      res.render("about");
});

app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
});
