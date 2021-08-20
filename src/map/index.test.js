var map = require('.');

test('map(array, callback): map return new array by callback', () => {
  var result = map([1, 2, 3, 4], (el) => el *2);
  var expectedResult = [2, 4, 6, 8];

  expect(result).toStrictEqual(expectedResult);
});

test('map(array, callback): if array is empty return empty array', () => {
  var result = map([], (el) => el *2);
  var expectedResult = [];

  expect(result).toStrictEqual(expectedResult);
});

test('map(array, callback): second arg should be function', () => {
  var result = map([1, 2, 3, 4], 0);
  var expectedResult = {
    error: 'second arg should be function',
  };
  expect(result).toStrictEqual(expectedResult);
});

test('map(array, callback): first arg should be array', () => {
  var result = map(false, (el) => el * el);
  var expectedResult = {
    error: 'first arg should be array',
  };

  expect(result).toStrictEqual(expectedResult);
});