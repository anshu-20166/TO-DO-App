const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose");
const port = 8000;
app.use(express.urlencoded());
app.use(express.static("./views"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) throw err;
  else console.log("TO-DO-App is running on port ", port);
});
