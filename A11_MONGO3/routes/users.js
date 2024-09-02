// Steps:
// First install mongoose = npm i mongoose
// 1. require mongoose
// 2. create DB
// 3. make schema
// 4. create model and export

const mongoose = require("mongoose"); // require mongoose

mongoose.connect("mongodb://127.0.0.1:27017/practice"); //created DB

// Schema (Document In DB)
// const schemaName = mongoose.Schema({
//     name: datatype,
// })

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    id: Number
});

// Model (Collection In DB)
// mongoose.model("CollectionName", schemaname);

module.exports = mongoose.model("user", userSchema);
