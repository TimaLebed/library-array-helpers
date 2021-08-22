var map = require('.');

test('map(array, callback): map return new array by callback', function() {
  var result = map([1, 2, 3, 4], function(el) {
    return el * 2;
  });
  var expectedResult = [2, 4, 6, 8];

  expect(result).toStrictEqual(expectedResult);
});
