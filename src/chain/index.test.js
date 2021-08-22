var chain = require('.');
var library = require('../../index');

test('chain(array, n): chain array and return library', function() {
  var result = chain.apply(library, [1, 2, 3]);
  var expectedResult = library;

  expect(result).toStrictEqual(expectedResult);
});