let num=287152;
let count=0;
let ans=0;
let factorial=1;
let n=prompt("Enter the value:");
for(let i=1;i<=n;i++){
    factorial=factorial*i;
}
console.log(factorial);
parseInt(num);
while(num>0){
    ans=ans+num%10;
    num=Math.floor(num/10);
    count++;
}
console.log(ans);
console.log(count);
