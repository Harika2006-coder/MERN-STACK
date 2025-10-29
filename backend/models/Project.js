const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  client: String,
  freelancer: String,
});

module.exports = mongoose.model("Project", projectSchema);
