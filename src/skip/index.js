function skip(array, n) {
  if (array.length === 0) {
    return array;
  }

  if (n > array.length) {
    return [];
  }

  if (n < 0) {
    return {
      error: 'second arg should be positive number',
    };
  }

  if (typeof n !== 'number') {
    return {
      error: 'second arg should be number',
    };
  }

  if (!Array.isArray(array)) {
    return {
      error: 'first arg should be array',
    };
  }

  var result = [];

  for (var i = n; i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}

module.exports = skip;
