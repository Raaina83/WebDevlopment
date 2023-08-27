let form=document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");
    let user=this.elements[0];
    let pass=this.elements[1];

    alert(`Hi ${user.value}! Your password is set to ${pass.value}`);

    // console.log(user.value);
    // console.log(pass.value);
})