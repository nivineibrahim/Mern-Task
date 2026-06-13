const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
    },
    countryCode: {
      type: String,
    },
    countryName: {
      type: String,
    },
    operatorName: {
      type: String,
    },
    category: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Category",
  required: true,
},
  },
  { timestamps: true }
);

module.exports = mongoose.model("item", itemSchema);