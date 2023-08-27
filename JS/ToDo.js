let toDo=[];
let req=prompt("What would you like to do?");
let idx,add;
while(true){
    if(req=="quit"){
        console.log("Quitting the app!");
        break;
    }
    if(req=="list"){
        console.log(toDo);
    }
    else if(req=="add"){
        //  add=prompt("Please enter your task:");
         toDo.push(prompt("Please enter your task:"));
    }
    else if(req=="delete"){
        for(let i=0;i<toDo.length;i++){
            console.log(i,toDo[i]);
        }
        idx=prompt("Enter the index of the task you want to delete:");
        toDo.splice(idx,1);
    }
    else{
        console.log("Please enter valid request!")
    }
    req=prompt("What would you like to do?");
}