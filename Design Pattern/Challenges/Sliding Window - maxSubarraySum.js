function maxSubarraySum(arr,num){
	if (num>arr.length) return null
	var maxSum = 0;
	for(var index = 0; index<num; index++){
		maxSum += arr[index];
	}
	var window = maxSum;
	for(index=num; index<arr.length; index++){
		window += arr[index] - arr[index-num];
		if(window>maxSum){ 
			maxSum=window;
		}
	}
	return maxSum
}




console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null