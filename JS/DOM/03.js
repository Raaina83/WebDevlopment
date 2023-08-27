let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    // console.log(event.key);
    // console.log(event.code);
    // console.log(event);
    if(event.code=="ArrowUp"){
        console.log("Character moves forward");
    }
    if(event.code=="ArrowDown"){
        console.log("Character moves backward");
    }
    if(event.code=="ArrowLeft"){
        console.log("Character moves left");
    }
    if(event.code=="ArrowRight"){
        console.log("Character moves right");
    }
});