const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  {strict: false, timestamps: true, collection: "tbl_short_urls" }
);

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
