const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
    .then(() =>{
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


// Chat.deleteOne({_id:"6516ecea046cd8a9ca4c5742"}).then(res =>{
//     console.log(res);
// });

// let allChats=[
//     {
//         from:"raaina",
//         to:"priya",
//         msg:"did you reach home yet?",
//         created_at:new Date()
//     },
//     {
//         from:"alisha",
//         to:"raaina",
//         msg:"can you help me with the labs please",
//         created_at:new Date()
//     },
//     {
//         from:"ojasvi",
//         to:"palak",
//         msg:"are you coming to college tomorrow",
//         created_at:new Date()
//     },
//     {
//         from:"kristen",
//         to:"latrice",
//         msg:"fuk off bitch",
//         created_at:new Date()
//     },
//     {
//         from:"raaina",
//         to:"hwasa",
//         msg:"i love you~",
//         created_at:new Date()
//     }
// ]

// Chat.insertMany(allChats);