function savetoDB(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        resolve("data was saved successfully!");
    } else {
        reject("connection lost!");
    }
    });
}

// let request=savetoDB("raaina")

savetoDB("raaina")
.then(() =>{
    console.log("promise was resolved!");
    // console.log(request)
})
.catch(() =>{
    console.log("Promise was rejected!");
    // console.log(request)
});