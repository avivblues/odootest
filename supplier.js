// load mongoose models from JSON
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const supplierSchema = new Schema({
  MATERIAL_ID: {
    type: int,
  },
  NAME: {
    type: String,
    lowercase: true,
    trim: true,
  },
  ADDRESS: {
    type: String,
    required: true,
  },
  PHONE: {
    type: Number,
    required: true,
  },
  supplierLastChanged: {
    type: String,
    default: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
    required: true,
  },
  supplierCreated: {
    type: String,
    default: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
    required: true,
  },
});
module.exports = mongoose.model("supplierModels", supplierSchema);
