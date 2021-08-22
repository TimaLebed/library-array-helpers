var foreach = require('../foreach');

function filter(array, callback) {
  var result = [];

  if (typeof array === 'function') {
    var func = array;

    foreach(this.result, function(item, index, self) {
      if (func(item, index, self)) {
        result.push(item);
      }
    });
  } else {
    foreach(array, function(item, index, self) {
      if (callback(item, index, self)) {
        result.push(item);
      }
    });
  }

  this.result = result;

  return Array.isArray(array) ? result : this;
}

module.exports = filter;
