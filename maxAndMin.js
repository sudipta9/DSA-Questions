function maxAndMin(arr) {
	const value = {
		min: null,
		max: null,
	};

	// if array length is 1
	if (arr.length == 1) {
		value.min = arr[0];
		value.max = arr[0];
	}

	// if the array length is greater then 1 then initial the min and max
	else if (arr.length > 1) {
		value.min = arr[0];
		value.max = arr[1];
		for (i = 2; i < arr.length; i++) {
			if (arr[i] > value.max) value.max = arr[i];
			else if (arr[i] < value.min) value.min = arr[i];
		}
	}

	return value;
}

console.log(maxAndMin([]));

// * best case: arr length will be 0
// total number of comparison 2
// * Worst case: arr length will be 'n'
// total number of comparison 2 + 2(n - 2)
