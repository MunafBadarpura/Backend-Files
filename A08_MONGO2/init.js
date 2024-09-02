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

let allChats = [
    {
        from:"munaf",
        to:"hasan",
        msg:"hello",
        created_at: new Date()
    },
    {
        from:"saikh",
        to:"insaan",
        msg:"how are you",
        created_at: new Date()
    },
    {
        from:"fatish",
        to:"latish",
        msg:"kaise ho",
        created_at: new Date()
    },
    {
        from:"afnan",
        to:"sahad",
        msg:"kab jaana hai",
        created_at: new Date()
    },
    {
        from:"irfan",
        to:"mustak",
        msg:"hii brother",
        created_at: new Date()
    },
]

Chat.insertMany(allChats);