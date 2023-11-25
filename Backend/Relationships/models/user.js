const mongoose = require("mongoose");

main()
    .then(() =>{
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationships');
}

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () =>{
    let user1 = new User({
        username: "Keiran",
        addresses: [{
            location: "Ardhalis Train Station",
            city: "New York"
        }],
    })

    user1.addresses.push({location: "Greychapel", city: "New York"});
    let result = await user1.save();
    console.log(result);
}

addUsers();