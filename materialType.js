var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const materialTypeSchema = new Schema({
  ID: {
    type: int,
  },
  NAME_TYPE: {
    type: String,
    lowercase: true,
    trim: true,
  },
  typeLastChanged: {
    type: String,
    default: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
    required: true,
  },
  typeCreated: {
    type: String,
    default: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
    required: true,
  },
});
module.exports = mongoose.model("typeModels", materialTypeSchema);
