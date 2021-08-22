var take = require('.');

test('take(array, n): take array and return new array by N', function() {
  var result = take([1, 2, 3, 4], 2);
  var expectedResult = [1, 2];

  expect(result).toStrictEqual(expectedResult);
});
