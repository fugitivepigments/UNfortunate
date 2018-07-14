const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fortuneSchema = new Schema({
  fortune: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: {type: String, required: true}
});

const Fortune = mongoose.model("Fortune", fortuneSchema);

module.exports = Fortune;