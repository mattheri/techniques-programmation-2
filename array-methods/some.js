const some = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return true;
		}
	}

	return false;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

some(array, (element) => element % 2 === 0); //?