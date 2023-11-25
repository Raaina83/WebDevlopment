const mongoose = require("mongoose");

main()
    .then(() =>{
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationships');
}

const orderSchema = new mongoose.Schema({
    item: String,
    price: Number,
});

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,// by default will only store object id even if we try to push whole object!!
            ref: 'Order',
        }
    ]
})

// mongoose.Schema.pre("findOneAndDelete", async() =>{
//     console.log("PRE middleware");
// });

//Middleware(mongoose)
customerSchema.post("findOneAndDelete", async(customer) =>{
    console.log("PRE middleware");
    if(customer.orders.length){
        await Order.deleteMany({_id: {$in: customer.orders}});    
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const deleteCust = async() =>{
    await Customer.findByIdAndDelete("652cdbe1aafeb142669ef169");
};

deleteCust();

// const addCustomers = async() =>{
//     let cust1 = new Customer({
//         name: "Priya",
//     });

//     let order1 = new Order(
//         {
//             item: "pizza",
//             price: 250,
//         },
//     );

//     cust1.orders.push(order1);
//     await order1.save();
//     await cust1.save();
// };

// addCustomers();

// const addOrders= async()=>{
//     let result= await Order.insertMany([
//     {item: "samosa", price:4},
//     {item:"milkybar", price:10},
//     {item:"Green lays", price:20},
//     ]);
//     console.log(result);
// };

// addOrders();