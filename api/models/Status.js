const { Schema, model } = require("mongoose");

const statusSchema = new Schema({
  status: {
    type: String,
  },
});

module.exports = model("Status", statusSchema);
