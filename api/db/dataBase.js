const mongoose = require("mongoose");
let instance = null;
class database {
  constructor() {
    if (!instance) {
      this.mongoConnection = null;
      instance = null;
    }
    return instance;
  }
  async connect(options) {
    try {
      console.log("db connecting");
      let db = await mongoose.connect(options.Connection_string);
      this.mongoConnection = db;
      console.log("db connected");
    } catch (err) {
      console.log("db connection error", err);
      process.exit(1);
    }
  }
}
module.exports = database;
