function maxAndMin1(arr) {
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

// console.log(maxAndMin1([]));

// * best case: arr length will be 0
// total number of comparison 2
// * Worst case: arr length will be 'n'
// total number of comparison 2 + 2(n - 2)

// ! _____ Solution 2 _____
function maxAndMin2(arr, high, low) {
	const result = {
		min: arr[low],
		max: arr[low],
	};

	// if there is only one Element
	if (low === high) {
		result.min = arr[low];
		result.max = arr[low];
		return result;
	}

	// if there are only two Elements
	else if (high === low + 1) {
		if (arr[high] > arr[low]) {
			result.min = arr[low];
			result.max = arr[high];
		} else {
			result.min = arr[high];
			result.max = arr[low];
		}

		return result;
	}

	// if there are more then two element
	else {
		const mid = Math.floor((low + high) / 2);
		const maxMin1 = maxAndMin2(arr, mid, low);
		const maxMin2 = maxAndMin2(arr, high, mid);
		result.max = Math.max(maxMin1.max, maxMin2.max);
		result.min = Math.min(maxMin1.min, maxMin2.min);
		return result;
	}
}

// # Driver code
const arr = [2, 5, 8, 9, 10, 89, 65];
const high = arr.length - 1;
const low = 0;

console.log(maxAndMin2(arr, high, low));
