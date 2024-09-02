const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");  // DB created with name of test

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  discription: String,
  categories: {
    type: Array,
    default: [] 
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", userSchema);
