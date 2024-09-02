var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/NEWW");

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  }
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
// module.exports = router;




