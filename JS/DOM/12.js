function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("data was saved successfully!");
        } else {
            reject("connection lost!");
        }
    });
}

// let request=savetoDB("raaina")

// savetoDB("raaina")
// .then(() =>{
//     console.log("data1 was saved!");
//     savetoDB("hello world!").then(() =>{
//         console.log("data2 was saved!");
//     });
// })
// .catch(() =>{
//     console.log("Promise was rejected!");
// });

savetoDB("raaina")
    .then((result) => {
        console.log("data1 was saved!");
        console.log("result: ",result);
        return savetoDB("hello world!");
    })
    .then((result) => {
        console.log("data2 was saved!");
        console.log("result: ",result);
    })
    .catch((error) => {
        console.log("Promise was rejected!");
        console.log("reason: ",error);
    });