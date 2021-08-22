var skip  = require('.');

test('skip(array, n): skip array and return new array by N', function() {
  var result = skip([1, 2, 3, 4], 2);
  var expectedResult = [3, 4];

  expect(result).toStrictEqual(expectedResult);
});
