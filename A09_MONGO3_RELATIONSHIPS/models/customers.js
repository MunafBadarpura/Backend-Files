const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(() => console.log("Connection Succssful"))
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/MongoRelationship");
}


const orderSchema = new Schema({
    item: String,
    price: Number
});
const Order = mongoose.model("Order", orderSchema);

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async() => {
//     let customer1 = new Customer({
//         name: "Viswa"
//     });

//     let order1 = await Order.findOne({item: "cake"});
//     let order2 = await Order.findOne({item: "pepsi"});

//     customer1.orders.push(order1);
//     customer1.orders.push(order2);

//     let result = await customer1.save();
//     console.log(result);

// }
// addCustomer();

// const addOrder = async() => {
//     let result = await Order.insertMany([
//         {item: "cake", price: 600},
//         {item: "burger", price: 150},
//         {item: "pepsi", price: 100}
//     ]);
//     console.log(result);
// }
// addOrder();


const findCustomer = async() => {
    let result = await Customer.findOne({}).populate("orders");
    console.log(result);
}
findCustomer();

