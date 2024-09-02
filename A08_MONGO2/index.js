const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); 
app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
    console.log("app is listing on port 8080");
})

app.get("/", (req,res) => {
    res.send("Root Working");
});

// Index Route
app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    res.render("index.ejs", {chats})
})

// New Route
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
})

