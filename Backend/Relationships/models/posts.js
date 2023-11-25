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
    email: String,
});

const postSchema = new mongoose.Schema({
    content: String,
    likes: Number,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

let addData = async() =>{
    let user = await User.findOne({username: "Raaina"});
    let post2= new Post({
        content: "Bye Bye:)",
        likes: 14,
    });
    post2.user = user;

    // await user1.save();
    await post2.save();
};

addData();