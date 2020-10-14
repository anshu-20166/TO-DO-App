const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const data = mongoose.model("data", todoSchema);
module.exports = data;
