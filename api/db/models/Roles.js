const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_name: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    createdBy: { type: mongoose.SchemaTypes.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
class Roles extends mongoose.Model {}
schema.loadClass(Roles);
modeule.exports = mongoose.model("roles", schema);
