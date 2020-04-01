const binarySearch = (array, value) => {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (min <= max) {
    // Avoid rounding bug
    // Division truncates; when max + min is negative
    // it would start rounding toward the higher bound.
    // We ensure the number is always positive and will
    // always round to the lower bound.
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
