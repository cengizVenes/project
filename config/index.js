module.exports = {
  Log_level: process.env.Log_level || "debug",
  Connection_string:
    process.env.Connection_string || "mongodb://localhost:27017",
};
