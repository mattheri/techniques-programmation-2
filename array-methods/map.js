const map = (array, callback) => {
	const arr = [];

	for (let i = 0; i < array.length; i++) {
		arr.push(callback(array[i], i, array));
	}

	return arr;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

map(array, (element) => element * 2); //?