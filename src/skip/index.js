function skip(array, n) {
  var result = [];

  if (typeof array === 'number') {
    var number = array;

    this.result = skip(this.result, number);
  }

  for (var i = n; i < array.length; i++) {
    result.push(array[i]);
  }

  return Array.isArray(array) ? result : this;
}

module.exports = skip;
