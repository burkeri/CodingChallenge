// dependencies
const mongoose = require("mongoose");

// schema method - mongoose
const Schema = mongoose.Schema;

// image schema
const imageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// create model
const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
