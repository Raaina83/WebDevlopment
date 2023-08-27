let arr=[1,2,3,4,5,6,2,3];
let num=3;
console.log("printing original array!");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("Deleting from array!")
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log("Printing new array!");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
