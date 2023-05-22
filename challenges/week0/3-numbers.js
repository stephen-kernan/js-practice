"use strict";
/*
Numbers aren't too complicated - they're numbers in the same sense you'd expect.
Some languages distinguish between Integer and Float (decimal) numbers, but Javascript
does not.

Fill in the answers based on the description using the most relevant method for
the Number datatype.
*/
exports.__esModule = true;
exports.answer = exports.testNumber = void 0;
exports.testNumber = 5.25;
exports.answer = {
    isNotNumber: Number.isNaN(exports.testNumber),
    isWholeNumber: Number.isInteger(exports.testNumber),
    toString: exports.testNumber.toString(),
    oneFixedDecimal: exports.testNumber.toFixed(1)
};
console.log("isNotNumber: ".concat(!exports.answer.isNotNumber ? '✅' : '❌'));
console.log("isWholeNumber: ".concat(!exports.answer.isWholeNumber ? '✅' : '❌'));
console.log("toString: ".concat(exports.answer.toString === '5.25' ? '✅' : '❌'));
console.log("oneDecimal: ".concat(exports.answer.oneFixedDecimal === '5.3' ? '✅' : '❌'));
