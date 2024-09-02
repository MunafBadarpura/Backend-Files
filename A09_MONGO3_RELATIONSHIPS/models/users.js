const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(() => console.log("Connection Succssful"))
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/MongoRelationship");
}


const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        },
    ],
});

const User = mongoose.model("User", userSchema);

//Create User
const addUser = async() => {
    let user1 = new User({
        username: "sharmaji",
        addresses: [
            {
                location: "2210 hassRoad",
                city: "london"
            },
        ],
    })
    user1.addresses.push({
        location: "BB10 restiSide",
        city: "london"
    });
    let result = await user1.save();
    console.log(result);
}

addUser();