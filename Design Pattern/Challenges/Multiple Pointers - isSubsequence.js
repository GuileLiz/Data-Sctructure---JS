function isSubsequence(str1, str2){
	var sameLetter = 0;
	var compareLetter = 0;
	if(!str1) return true;
	while(compareLetter < str2.length){
		if(str2[compareLetter] == str1[sameLetter]) sameLetter++;
		if(sameLetter == str1.length) return true;
		compareLetter++;
	}
	return false;
}
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)