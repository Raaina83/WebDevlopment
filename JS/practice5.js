let ar = [12, 24, 27, 10, 7];

function array(number,arr) {
    let arr2=[];
    for (let i = 0; i < arr.length - 1; i++) {
        if (number < arr[i]) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(array(18,ar));