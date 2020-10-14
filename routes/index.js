const express = require("express");

const router = express.Router();
const todoController = require("../controllers");

router.get("/", todoController.home);
router.use("/todo", require("./todo"));

module.exports = router;
