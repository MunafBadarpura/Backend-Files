const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// // Model (Collection)
const User = mongoose.model("User", userSchema);

// // Inserting Data 
// const user1 = new User({
//     name: "Hasan",
//     email: "hasan1@yahoo.com",
//     age: 19
// });

// user1.save();

// const user2 = new User({
//     name: "Munaf",
//     email: "munaf11@yahoo.com",
//     age: 18
// });

// user2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // insert Many
// User.insertMany([
//     {name:"sahad", email:"sahad@gmail.com", age:19},
//     {name:"afnan", email:"afnan@gmail.com", age:20},
//     {name:"jishan", email:"jishan@gmail.com", age:18}
// ])
// .then((res) => {
//     console.log(res);
// })

// Find
// User.find({age: {$gte : 19}})
// .then((res) => {
//     console.log(res);
//     // console.log(res[0].name);
// })
// .catch((err) => {
//     console.log(err);
// })


// User.findById("66064bb28b3fab7eb26070a3")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })
// // We Also Use findOne() 

// // Update
// User.updateOne( {name:"Munaf"}, {age:90} )
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.updateMany( {age: {$gte: 19} }, {age:40} )
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // Update One
// User.findOneAndUpdate( {age: {$gte: 40} }, {age:100}, {new : true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findByIdAndUpdate("66064bb28b3fab7eb26070a4", {age:100}, {new : true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })



// // DELETE-METHODS
// User.deleteOne({name:"Munaf"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // User.deleteMany()

// User.findByIdAndDelete("660647fd3f727e83128082bb")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // User.findOneAndDelete()

