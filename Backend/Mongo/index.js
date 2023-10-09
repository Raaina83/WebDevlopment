const mongoose = require('mongoose');

main()
    .then((res)=>{
    console.log("Connection successful");
})
    .catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User=mongoose.model("User",userSchema);

User.findByIdAndUpdate("6515191315c0f463d1bc598f",{age:31},{new:true})
  .then(res =>{
    console.log(res);
  }).catch(err =>{
    console.log(err);
  });

// User.updateOne({_id:"65150d890da806e382d41076"},{name:"Betty",email:"bett@yahoo.in",age:50})
//   .then(res =>{
//     console.log(res);
//   }).catch(err =>{
//     console.log(err);
//   });

// User.find({})
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     });

// const user3=new User({
//     name:"Raaina",
//     email:"raaina@gmail.com",
//     age:20
// });

// user1.save();

// const user2=new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:49
// });

// user3.save()
//     .then((res) =>{
//     console.log(res);
// })
//     .catch((err) =>{
//     console.log(err);
// });