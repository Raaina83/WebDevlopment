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