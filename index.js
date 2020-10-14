const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("MY TO DO");
});
app.listen(8000, function (err) {
  if (err) throw err;
  else console.log("TO-DO-App is running on port 8000 ");
});
