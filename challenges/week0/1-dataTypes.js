"use strict";
/*
These are the five datatypes most commonly used
in React (not including classes and functions,
which we'll get to later). You can find more information
about them by Googling 'Javascript {dataType}'.

Replace the 'undefined' value next to the datatype with
an example of the appropriate datatype.
*/
exports.__esModule = true;
exports.dataTypes = void 0;
exports.dataTypes = {
    "null": null,
    string: 'grannyass',
    number: 69,
    boolean: true,
    array: [true, false, true],
    object: { granny: 42069 }
};
console.log("String: ".concat(typeof exports.dataTypes.string === 'string' ? '✅' : '❌'));
console.log("Number: ".concat(typeof exports.dataTypes.number === 'number' ? '✅' : '❌'));
console.log("Boolean: ".concat(typeof exports.dataTypes.boolean === 'boolean' ? '✅' : '❌'));
console.log("Array: ".concat(Array.isArray(exports.dataTypes.array) ? '✅' : '❌'));
console.log("Object: ".concat(typeof exports.dataTypes.object === 'object' && !Array.isArray(exports.dataTypes.object)
    ? '✅'
    : '❌'));
