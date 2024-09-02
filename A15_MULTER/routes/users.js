const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/multer");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  dp: {
    type: String, // URL to the display picture
    default: "default.jpeg"
  },
  email: {
    type: String,
    unique: true
  }
});

// userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);

