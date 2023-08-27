let url="https://catfact.ninja/fact";
fetch(url) //returns a promise!
.then((response) =>{
    console.log(response); //not a readable format
    return response.json(); //coverted into readable format
})
.then((data) =>{
    console.log("Data1 is : ", data.fact);
    return fetch(url);
})
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log("Data2 is : ",data.fact)
})
.catch((err) =>{
    console.log("Error: ",err);
});
console.log("hello, raaina here!"); //does not wait for fetch to complete(asynchoronous nature of javascript!!)