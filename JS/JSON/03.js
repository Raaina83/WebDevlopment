let url = "https://catfact.ninja/fact2";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json(); //also returns a promise
        console.log(data.fact); //might give error if await not used,as fetch might not have fetched the url but js is asynchronous(with promises)
    } catch (err) {
        console.log("ERROR")
    }
    console.log("Hello there!"); //will execute even if above code fails
}