let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click", function(){
    let newLi=document.createElement("li");
    let dltBtn=document.createElement("button");

    newLi.innerText=inp.value;
    dltBtn.innerText="Delete";
    dltBtn.classList.add("delete");

    newLi.appendChild(dltBtn);
    ul.appendChild(newLi);
    inp.value="";
});

ul.addEventListener("click",function(event){
    // console.log(event.target);
    if(event.target.nodeName=="BUTTON"){
        let dltElement=event.target.parentElement;
        dltElement.remove();
    }
    // console.log("button clicked!")
});

// let dltBtns=document.querySelectorAll(".delete");
// for(dltBtn of dltBtns){
//     dltBtn.addEventListener("click", function(){
//         let par=this.parentElement;
//         console.log(par);
// });
// }