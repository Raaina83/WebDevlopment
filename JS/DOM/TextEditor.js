let inp=document.querySelector("input");

inp.addEventListener("input", function(){
    let p=document.querySelector('p');
    p.innerText=inp.value;
    console.log(inp.value);
})