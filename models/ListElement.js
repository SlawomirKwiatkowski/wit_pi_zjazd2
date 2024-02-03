const mongoose = require("mongoose");

const ListElementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

module.exports = new mongoose.model("ListElement", ListElementSchema);
