var mongoose = require("mongoose");

var items = mongoose.Schema({
  itemid: Number,
  itemname: String,
});

module.exports = mongoose.model("items", items);
