"use strict";
/*
Strings are actually just two or more characters put together.
A character is a letter inside of quotation marks (i.e., 'a', 'b', 'c').
Strings have various built-in 'methods' which can be used to manipulate the string
or to find out more information about its contents.

You can think of a 'method' as a built-in action that is shared among all
instances of the same datatype. Strings, Numbers, Booleans, Arrays, and Objects
each have unique methods that we'll test out here.

If you Google the descriptions in the comments to the right,
you should be able to find the method that accomplishes the goal.

DON'T MANUALLY TYPE THE ANSWERS
*/
var _a, _b, _c;
exports.__esModule = true;
exports.carvedCorrectly = exports.answer = exports.testString = void 0;
exports.testString = 'I see dead people';
exports.answer = {
    howManyCharacters: exports.testString.length,
    fifthCharacter: exports.testString.charAt(4),
    upperCase: exports.testString.toUpperCase(),
    lowerCase: exports.testString.toLowerCase(),
    carvedUp: exports.testString.split(' '),
    itsAliveee: exports.testString.replace('dead', 'living')
};
exports.carvedCorrectly = ((_a = exports.answer.carvedUp) === null || _a === void 0 ? void 0 : _a.length) === 4
    && ((_b = exports.answer.carvedUp) === null || _b === void 0 ? void 0 : _b.includes('I'))
    && ((_c = exports.answer.carvedUp) === null || _c === void 0 ? void 0 : _c.includes('see'));
console.log("howManyCharacters: ".concat(exports.answer.howManyCharacters === 17 ? '✅' : '❌'));
console.log("fifthCharacter: ".concat(exports.answer.fifthCharacter === 'e' ? '✅' : '❌'));
console.log("upperCase: ".concat(exports.answer.upperCase === 'I SEE DEAD PEOPLE' ? '✅' : '❌'));
console.log("lowerCase: ".concat(exports.answer.lowerCase === 'i see dead people' ? '✅' : '❌'));
console.log("carvedUp: ".concat(exports.carvedCorrectly ? '✅' : '❌'));
console.log("itsAliveee: ".concat(exports.answer.itsAliveee === 'I see living people' ? '✅' : '❌'));
