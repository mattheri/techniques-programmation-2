const find = (array, callback) => {
	let element;

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			element = array[i];
			break;
		}
	}

	return element;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

find(array, (element) => element % 2 === 0); //?