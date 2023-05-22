"use strict";
/*
There are only two Boolean values --- true, or false.

Booleans are quite powerful because they give you flexibility to handle
many situations. That said, though they seem simple Booleans often create some
of the most confusing bits of code because they're not always
clear - especially when chained together.

Below you'll see 7 values and 7 questions. Each question returns a Boolean value
by either comparing or examining one or more of the 7 available values.

In the answers section below, write either true or false based on the corresponding question.
*/
exports.__esModule = true;
exports.answer = exports.questionSeven = exports.questionSix = exports.questionFive = exports.questionFour = exports.questionThree = exports.questionTwo = exports.questionOne = exports.exampleAnswer = exports.isHonestlyNevermindMid = exports.ratio = exports.maidens = void 0;
// Example: Determine if Drake's new album 'Honestly, Nevermind' is mid based on the maiden count and ratio,
//          Then, set exampleAnswer to the correct value
exports.maidens = 0;
exports.ratio = true;
exports.isHonestlyNevermindMid = exports.ratio && exports.maidens === 0;
exports.exampleAnswer = true;
var valueOne = 13;
var valueTwo = '13';
var valueThree = 16;
var valueFour = 'seventeen';
var valueFive = 'eighteen';
var valueSix = 0;
var valueSeven = false;
// hints to the right ----------------------->
exports.questionOne = valueOne == valueTwo; // double equality vs triple equality
exports.questionTwo = !!valueSix; // double-bang operator
exports.questionThree = valueTwo !== valueOne; // non-equality in javascript
exports.questionFour = valueFive < valueFour; // comparators
exports.questionFive = !valueSeven; // bang operator
exports.questionSix = !valueSeven || valueOne > valueThree; // double pipe
exports.questionSeven = !valueSeven && valueThree < valueOne; // double ampersand
exports.answer = {
    questionOne: true,
    questionTwo: false,
    questionThree: true,
    questionFour: true,
    questionFive: true,
    questionSix: true,
    questionSeven: false
};
console.log("questionOne: ".concat(exports.answer.questionOne === exports.questionOne ? '✅' : '❌'));
console.log("questionTwo: ".concat(exports.answer.questionTwo === exports.questionTwo ? '✅' : '❌'));
console.log("questionThree: ".concat(exports.answer.questionThree === exports.questionThree ? '✅' : '❌'));
console.log("questionFour: ".concat(exports.answer.questionFour === exports.questionFour ? '✅' : '❌'));
console.log("questionFive: ".concat(exports.answer.questionFive === exports.questionFive ? '✅' : '❌'));
console.log("questionSix: ".concat(exports.answer.questionSix === exports.questionSix ? '✅' : '❌'));
console.log("questionSeven: ".concat(exports.answer.questionSeven === exports.questionSeven ? '✅' : '❌'));
