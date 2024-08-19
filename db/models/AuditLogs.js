const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    level: String,
    email: String,
    location: String,
    log: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
class AuditLogs extends mongoose.Model {}
schema.loadClass(AuditLogs);
module.exports = mongoose.model("auditLogs", schema);
