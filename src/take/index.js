function take(array, n) {
  var result = [];

  if (typeof array === 'number') {
    const number = array;

    this.result = take(this.result, number);
  }

  for (var i = 0; i < n; i++) {
    result.push(array[i]);
  }

  return Array.isArray(array) ? result : this;
}

module.exports = take;
