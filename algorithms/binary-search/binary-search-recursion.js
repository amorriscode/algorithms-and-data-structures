const binarySearch = (array, value, min = 0, max = array.length - 1) => {
  if (max < min) {
    return -1;
  }

  const guess = min + Math.floor((max - min) / 2);

  if (array[guess] === value) {
    return guess;
  } else if (array[guess] < value) {
    return binarySearch(array, value, guess + 1, max);
  } else {
    return binarySearch(array, value, min, guess - 1);
  }
};

module.exports = binarySearch;
