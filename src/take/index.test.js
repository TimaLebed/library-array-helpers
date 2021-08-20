var take = require('.');

test('take(array, n): take array and return new by N', () => {
  var result = take([1, 2, 3, 4], 2);
  var expectedResult = [1, 2];

  expect(result).toStrictEqual(expectedResult);
});

test('take(array, n): if array is empty return empty array', () => {
  var result = take([], 3);
  var expectedResult = [];

  expect(result).toStrictEqual(expectedResult);
});

test('take(array, n): if N more than array.length then return full array', () => {
  var result = take([1, 2, 3, 4], 10);
  var expectedResult = [1, 2, 3, 4];

  expect(result).toStrictEqual(expectedResult);
});

test('take(array, n): second arg should be positive number', () => {
  var result = take([1, 2, 3, 4], -2);
  var expectedResult = {
    error: 'second arg should be positive number',
  };
  expect(result).toStrictEqual(expectedResult);
});

test('take(array, n): second arg should be number', () => {
  var result = take([1, 2, 3, 4], 'a');
  var expectedResult = {
    error: 'second arg should be number',
  };
  expect(result).toStrictEqual(expectedResult);
});

test('take(array, n): first arg should be array', () => {
  var result = take(true, 2);
  var expectedResult = {
    error: 'first arg should be array',
  };

  expect(result).toStrictEqual(expectedResult);
});
