var foreach = require('../foreach');

function map(array, callback) {
  if (array.length === 0) {
    return array;
  }

  if (typeof callback !== 'function') {
    return {
      error: 'second arg should be function',
    };
  }

  if (!Array.isArray(array)) {
    return {
      error: 'first arg should be array',
    };
  }

  var result = [];

  foreach(array, function(item, index, self) {
    result.push(callback(item, index, self));
  })

  return result;
}

module.exports = map;
