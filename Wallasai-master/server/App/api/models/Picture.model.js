const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PictureSchema = new Schema(
  {
    picture: { type: String, require: true },
    createdBy: [{ type: Schema.Types.ObjectId, ref: "idUser" }],
    createdPlant: [{ type: Schema.Types.ObjectId, ref: "plant" }],
  },
  { timestamps: true }
);
const Picture = mongoose.model("picture", PictureSchema);
module.exports = Picture;
