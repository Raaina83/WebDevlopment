

function unique(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let char=str[i];
            if(ans.indexOf(char)==-1){
                ans+=char;
            }
    }
    return ans;
}

console.log(unique("abcdabcdefgggh"));