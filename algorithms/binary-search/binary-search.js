const binarySearch = (array, value) => {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (min <= max) {
    guess = min + Math.floor((max - min) / 2);

    if (array[guess] === value) {
      return guess;
    } else if (array[guess] < value) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

module.exports = binarySearch;
