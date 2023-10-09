const mongoose = require('mongoose');

main()
    .then((res)=>{
    console.log("Connection successful");
})
    .catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema= mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:30,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is too low to sell on Amazon"],
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["fantasy","romance","comedy","drama","thriller","horror","rom-com","action"]
    }
})

const Book=mongoose.model("Book",bookSchema);

let book1=new Book({
    title:"Hero Killer",
    author:"Kkulbeol",
    price:430,
    category:"action"
});

book1.save()
    .then(res =>{
        console.log(res);
    })
    .catch(err =>{
        console.log(err);
    });