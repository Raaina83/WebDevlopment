let max=prompt("Enter the maximum number:");
let random=Math.floor(Math.random() * max)+1;
let guess=prompt("Enter your guess!");
console.log(random);
while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        console.log("Congratualtions!!Your guess was right!!");
        break;
    }
    else if(guess>random){
        guess=prompt("Try a lower number");
    }
    else{
        guess=prompt("Try a higher number");
    }
}