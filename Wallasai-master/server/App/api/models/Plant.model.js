const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlantSchema = new Schema(
  {
    name: { type: String, require: true },
    specie: { type: String, require: true },
    img: { type: String, require: true },
    price: { type: String, require: true },
    description: { type: String, require: true },
  },
  { timestamps: true }
);

const Plant = mongoose.model("plants", PlantSchema);
module.exports = Plant;
