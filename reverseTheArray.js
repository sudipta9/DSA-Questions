function reverse(arr) {
	const reversedArr = [];
	for (i = arr.length - 1; i >= 0; i--) {
		reversedArr.push(arr[i]);
	}
	return reversedArr;
}

console.log(reverse([1, 5, 6, 8, 6, 9, 10, 58, 554, 56]));
// O(n)
