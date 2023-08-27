let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("purple",1000);
//         });
//     });
// }); //CALLBACK HELL!

function changeColor(color,delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            h1.style.color=color;
            resolve("color was changed successfully!");
        },delay);
    })
}

changeColor("red",1000)
    .then(() =>{
        console.log("color1 was changed successfully");
        return changeColor("green",1000);
    })
    .then(() =>{
        console.log("color2 was changed successfully");
        return changeColor("blue",1000);
    })
    .then(() =>{
        console.log("color3 was changed successfully");
        return changeColor("purple",1000);
    })
    .catch(() =>{
        console.log("color couldn't change!");
    })