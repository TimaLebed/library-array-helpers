var skip  = require('.');

test('skip(array, n): skip array and return new by N', () => {
  var result = skip([1, 2, 3, 4], 2);
  var expectedResult = [3, 4];

  expect(result).toStrictEqual(expectedResult);
});

test('skip(array, n): if array is empty return empty array', () => {
  var result = skip([], 3);
  var expectedResult = [];

  expect(result).toStrictEqual(expectedResult);
});

test('skip(array, n): if N more than array.length then return empty array', () => {
  var result = skip([1, 2, 3], 6);
  var expectedResult = [];

  expect(result).toStrictEqual(expectedResult);
});

test('skip(array, n): second arg should be positive number', () => {
  var result = skip([1, 2, 3, 4, 5, 6], -2);
  var expectedResult = {
    error: 'second arg should be positive number',
  };
  expect(result).toStrictEqual(expectedResult);
});

test('skip(array, n): second arg should be number', () => {
  var result = skip([1, 2, 3], undefined);
  var expectedResult = {
    error: 'second arg should be number',
  };
  expect(result).toStrictEqual(expectedResult);
});

test('skip(array, n): first arg should be array', () => {
  var result = skip(5, 3);
  var expectedResult = {
    error: 'first arg should be array',
  };

  expect(result).toStrictEqual(expectedResult);
});
