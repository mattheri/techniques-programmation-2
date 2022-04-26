const filter = (array, callback) => {
	const arr = [];

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			arr.push(array[i]);
		}
	}

	return arr;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filter(array, (element) => element % 2 === 0); //?