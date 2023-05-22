"use strict";
// PROMPT
// Create a function that takes an array of numbers and returns a new array which
// doubles each of the numbers in the original array.
exports.__esModule = true;
exports.doubleArray = void 0;
function doubleArray(arr) {
    return arr.map(function (x) { return x * 2; });
}
exports.doubleArray = doubleArray;
