# library-array-helpers

## Functions:
* **filter(array, callback)**
* **foreach(array, callback)**
* **map(array, callback)**
* **reduce(array, callback, initialValue)**
* **skip(array, number)**
* **take(array, number)**
* **value()**
* **chain(array)**

## Using:
* nameOfYourLibrary.filter([1, 2, 3, 4], (el) => el % 2 === 0) will return [2, 4];
* nameOfYourLibrary.foreach([1, 2], (el) => el + 10) will return 11 and 12;
* nameOfYourLibrary.map([1, 2, 3, 4], (el) => el * 2) will return [2, 4, 6, 8];
* nameOfYourLibrary.reduce([1, 2, 3, 4], (acc, el) => acc + el, -10) will return 0;
* nameOfYourLibrary.skip([1, 2, 3, 4], 2) will return [3, 4];
* nameOfYourLibrary.take([1, 2, 3, 4], 2) will return [1, 2];
* nameOfYourLibrary.value() will return valid result after chaining;
* nameOfYourLibrary.chain([1, 2]) will return object with all functions for chaining;


## Examples of chaining
* nameOfYourLibrary.chain([1, 2, 3]).take(2).skip(1).value() will return [ 2 ];
* nameOfYourLibrary.chain([1, 2, 3, 4, 5, 6]).filter(function(el) { return el % 2 === 0 }).take(2).value() will return [2, 4];
* nameOfYourLibrary.chain([2, 4, 6, 8]).map(function(el) { return el * 2 }).skip(2).value() will return [12, 16];
* nameOfYourLibrary..chain([5, 10, 15, 20, 100]).take(4).reduce(function(el, initialValue) { return el + initialValue }, 10).value() will return 50;
