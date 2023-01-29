function validAnagram(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    frequencyCounter1 = {}
    frequencyCounter2 = {}
    for (let letter1 of str1) {
        frequencyCounter1[letter1] = (frequencyCounter1[letter1] || 0) + 1
    }
    for (let letter2 of str2) {
        frequencyCounter2[letter2] = (frequencyCounter1[letter2] || 0) + 1
        if (frequencyCounter1[letter2]){
            frequencyCounter1[letter2]-=1;
        } else {
            return false;
        }
    }
    return true;
}
console.log(validAnagram('texttwisttime', 'timetwisttext'))