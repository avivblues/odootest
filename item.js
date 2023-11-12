// load mongoose models from JSON
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const materialSchema = new Schema({
  MATERIAL_ID: {
    type: int,
  },
  MATERIAL_CODE: {
    type: String,
    lowercase: true,
    trim: true,
  },
  MATERIAL_NAME: {
    type: String,
    required: true,
  },
  MATERIAL_BUY_PRICE: {
    type: Number,
    required: true,
  },
  SUPPLIER_ID: {
    type: String,
    required: true,
  },
  materialLastChanged: {
    type: String,
    default: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
    required: true,
  },
  materialCreated: {
    type: String,
    default: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
    required: true,
  },
});
module.exports = mongoose.model("materialModels", materialSchema);
