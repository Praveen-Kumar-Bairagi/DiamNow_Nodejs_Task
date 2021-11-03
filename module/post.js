const mongoose = require("mongoose");

const blog = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Body: {
    type: String,
    required: true,
  },
  CreatedBy: {
    type: String,
    required: true,
  },
  ActiveInactive: {
    type: Boolean,
    required: true,
  },
  Geolocation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("blog_data", blog);
