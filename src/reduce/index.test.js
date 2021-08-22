var reduce = require('.');

test('reduce(array, callback, initialValue): reduce return number by callback', function() {
  var result = reduce([1, 2, 3, 4], function(acc, currentValue) {
    return acc + currentValue;
  });
  var expectedResult = 10;

  expect(result).toStrictEqual(expectedResult);
});

test('reduce(array, callback, initialValue): reduce return number by callback', function() {
  var result = reduce([1, 2, 3, 4], function(acc, currentValue) {
    return acc + currentValue;
  }, -10);
  var expectedResult = 0;

  expect(result).toStrictEqual(expectedResult);
});
