var filter = require('.');

test('filter(array, callback): filter return new array by callback', function() {
  var result = filter([1, 2, 3, 4], function(el) {
    return el % 2 === 0;
  });
  var expectedResult = [2, 4];

  expect(result).toStrictEqual(expectedResult);
});
