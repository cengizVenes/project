const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    roleId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    userId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
class UserRoles extends mongoose.Model() {}
schema.loadClass(UserRoles);
modeule.exports = mongoose.model("userRoles", schema);
