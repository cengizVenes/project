const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    roleId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    permission: { type: String, required: true },
    ceratedBy: { type: mongoose.SchemaTypes.ObjectId, reqired: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
class RolePrivileges extends mongoose.Model() {}
schema.loadClass(RolePrivileges);
module.exports = mongoose.model("rolePrivileges", schema);
