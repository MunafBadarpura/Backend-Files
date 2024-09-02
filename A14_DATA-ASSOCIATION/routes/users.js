const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Pinterest2");
const plm = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  dp: {
    type: String, // URL to the display picture
  },
  email: {
    type: String,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);
