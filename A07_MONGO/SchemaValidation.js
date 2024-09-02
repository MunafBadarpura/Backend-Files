const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection Succusful")
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        lowercase: true,
        minLength:4
    },
    price:{
        type: Number,
        min:50
    },
    discount:{
        type: Number,
        default:10 // 10rs Disciunt If Discount Not Mentioned
    },
    category:{
        type:String,
        enum:["Fiction", "Action", "Thriller"],
    }
});

const Book = mongoose.model("Book", bookSchema);

let book2 = new Book({
    title: "GameOfThrone",
    author: "SpechAllice",  // store in smallcase in database
    price: 450,
    catogery: "Fiction"
});
book2.save()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});


Book.findByIdAndUpdate("66076d4f375d0a467cbd71c5", {price:10})  // This is not recognise Validtor

Book.findByIdAndUpdate("66076d4f375d0a467cbd71c5", {price: 10}, {runValidators: true})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});