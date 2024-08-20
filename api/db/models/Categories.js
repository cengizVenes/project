const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    isActive: { type: Boolean, default: true },
    createdBy: { type: mongoose.SchemaTypes.ObjectId },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
class Categories extends mongoose.Model() {}
schema.loadClass(Categories);
module.exports = mongoose.model("Categories", schema);
