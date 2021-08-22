var foreach = require('../foreach');

function map(array, callback) {
  var result = [];

  if (typeof array === 'function') {
    var func = array;

    foreach(this.result, function(item, index, self) {
      result.push(func(item, index, self));
    });
  } else {
    foreach(array, function(item, index, self) {
      result.push(callback(item, index, self));
    });
  }

  this.result = result;

  return Array.isArray(array) ? result : this;
}

module.exports = map;
