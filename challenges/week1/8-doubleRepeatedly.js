"use strict";
// PROMPT
// Create a function that takes two numbers, which returns the value of the
// first number doubled N times, where N is the second number provided.
exports.__esModule = true;
exports.doubleRepeatedly = void 0;
function doubleRepeatedly(numberToDouble, n) {
    var result = numberToDouble;
    for (var i = 0; i < n; i += 1) {
        result *= 2;
    }
    return result;
}
exports.doubleRepeatedly = doubleRepeatedly;
