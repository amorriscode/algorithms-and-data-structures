const binarySearch = (array, value, min = 0, max = array.length - 1) => {
  if (max < min) {
    return -1;
  }

  // Avoid rounding bug
  // Division truncates; when max + min is negative
  // it would start rounding toward the higher bound.
  // We ensure the number is always positive and will
  // always round to the lower bound.
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
