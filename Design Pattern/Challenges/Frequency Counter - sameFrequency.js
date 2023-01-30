function sameFrequency(num1, num2){
    var strNum1=num1.toString();
    var strNum2=num2.toString();
    var frequencyCounter = {};
    for (var number1 of strNum1) {
        frequencyCounter[number1] = (frequencyCounter[number1] || 0) + 1;
    }
    for (var number2 of strNum2) {
        if(frequencyCounter[number2]){
            frequencyCounter[number2] = (frequencyCounter[number2]) - 1;
        } else {
            return false;
        }
    }
    return true;
}
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false