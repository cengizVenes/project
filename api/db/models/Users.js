const mongoose = require("mongoose");

const scheama = mongoose.Schema(
  {
    email: String,
    password: String,
    isActive: Boolean,
    firstName: String,
    lastName: String,
    phoneNumber: String,
  },
  {
    timestamps: true,
  }
);
class Users extends mongoose.Model {}
scheama.loadClass(Users);
modeule.exports = mongoose.model("users", scheama);
