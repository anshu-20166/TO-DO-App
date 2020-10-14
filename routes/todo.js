const express = require("express");

const router = express.Router();

const todoController = require("../controllers");

router.post("/addTodo", todoController.addTodo);

router.post("/deleteTodo", todoController.deleteTodo);

module.exports = router;
