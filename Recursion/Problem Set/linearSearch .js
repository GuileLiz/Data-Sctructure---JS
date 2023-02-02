function linearSearch(arr,num){
	for (var index=0; index <=arr.length; index++) {
		if(arr[index]===num) return index;
	}
	return -1;
}
console.log(linearSearch([10, 15, 20, 25, 30], 20)) // 1)

