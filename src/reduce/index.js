var foreach = require('../foreach');

function reduce(array, callback, initialValue) {
  if (typeof array === 'function') {
    var func = array;

    foreach(this.result, function(item, index, self) {
      initialValue = initialValue !== undefined ?
      func(initialValue, item, index, self) :
      item;
    });
  } else {
    foreach(array, function(item, index, self) {
      initialValue = initialValue !== undefined ?
      callback(initialValue, item, index, self) :
      item;
    });
  }

  this.result = initialValue;

  return Array.isArray(array) ? initialValue : this;
}

module.exports = reduce;
