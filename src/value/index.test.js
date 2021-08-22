var library = require('../../index');
var value = require('.');

test('value(): value array and return library', function() {
  var result = value.apply(library);
  var expectedResult = library.result;

  expect(result).toStrictEqual(expectedResult);
});

test('value(): library.chain([1, 2, 3]).take(2).skip(1).value() return new array', function() {
  var result = library.chain([1, 2, 3]).take(2).skip(1).value();
  var expectedResult = [2];

  expect(result).toStrictEqual(expectedResult);
});

test('value(): library.chain([1, 2, 3, 4, 5, 6]).filter(function(el) { return el % 2 === 0 }).take(2).value() return new array', function() {
  var result = library.chain([1, 2, 3, 4, 5, 6]).filter(function(el) { return el % 2 === 0 }).take(2).value();
  var expectedResult = [2, 4];

  expect(result).toStrictEqual(expectedResult);
});

test('value(): library.chain([2, 4, 6, 8]).map(function(el) { return el * 2 }).skip(2).value() return new array', function() {
  var result = library.chain([2, 4, 6, 8]).map(function(el) { return el * 2 }).skip(2).value();
  var expectedResult = [12, 16];

  expect(result).toStrictEqual(expectedResult);
});

test('value(): library.chain([5, 10, 15, 20, 100]).take(4).reduce(function(el, initialValue) { return el + initialValue }, 10).value() return new array', function() {
  var result = library.chain([5, 10, 15, 20, 100]).take(4).reduce(function(el, initialValue) { return el + initialValue }, 10).value();
  var expectedResult = 50;

  expect(result).toStrictEqual(expectedResult);
});
