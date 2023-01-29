/* function countUniqueValues(arr){
    frequencyCounter = {};
    for(element of arr){
        frequencyCounter[element] = (frequencyCounter[element] || 0) +1
    }
    console.log(frequencyCounter)
    console.log(Object.keys(frequencyCounter).length);
} */


function countUniqueValues(arr){ 
    if(arr.length===0) return 0;
    let first = 0;
    for (let second = 1;second<arr.length, second++ ){
        if(arr[first]!=arr[second]){
            first+=1;
            arr[first] = arr[second]
        }
    }
    console.log(first+1)
}
console.log(countUniqueValues([])) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4