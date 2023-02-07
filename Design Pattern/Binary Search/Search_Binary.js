function binarySearch(arr,elem) {
	var start = 0;
	var end = arr.length - 1;
	while (arr[middle] !== elem) {
/* 		if (arr[middle] === elem){
			console.log(middle)
		}
		else  */
		if (elem < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
}
binarySearch([2,5,6,9,13,15,28],15)