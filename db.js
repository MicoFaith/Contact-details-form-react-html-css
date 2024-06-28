const mongoose = require("mongoose")

module.exports =  mongoose.connect("mongodb://localhost/practical")
 .then(() => console.log("Connected to Mongo db Successfully.."))
  .catch((err) => console.log("Failed to connect to mongodb", err))
