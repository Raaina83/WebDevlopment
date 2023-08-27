function savetoDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDB(
    "apna college",
    () => {
        console.log("Data1 was saved successfully!");
        savetoDB(
            "raaina",
            () => {
                console.log("Data2 was saved successfully!");
            },
            () => {
                console.log("connection lost,data was not saved!");
            }
        );
    },
    () => {
        console.log("connection lost,data was not saved!");
    }
);