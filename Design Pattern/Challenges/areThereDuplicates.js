function areThereDuplicates(...args) { // if I use arguments, it will be in dictionary
    var frequencyCounter={};
    for (var number of args) {
        frequencyCounter[number]=(frequencyCounter[number] || 0) + 1;
    }
    for (var key in frequencyCounter){
        if (frequencyCounter[key] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 