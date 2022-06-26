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

const valueOne: any = 13;
const valueTwo: any = "13";
const valueThree: any = 16;
const valueFour: any = "seventeen";
const valueFive: any = "eighteen";
const valueSix: any = 0;
const valueSeven: any = false;

// hints to the right ----------------------->
export const questionOne = valueOne == valueTwo; // double equality vs triple equality
export const questionTwo = !!valueSix; // double-bang operator
export const questionThree = valueTwo !== valueOne; // non-equality in javascript
export const questionFour = valueFive < valueFour; // comparators
export const questionFive = !valueSeven; // bang operator
export const questionSix = !valueSeven || valueOne > valueThree; // double pipe
export const questionSeven = !valueSeven && valueThree < valueOne; // double ampersand

export const answer: {
  questionOne: boolean;
  questionTwo: boolean;
  questionThree: boolean;
  questionFour: boolean;
  questionFive: boolean;
  questionSix: boolean;
  questionSeven: boolean;
} = {
  questionOne: undefined, // replace undefined with whether testNumber is a number
  questionTwo: undefined, // replace undefined with whether or not testNumber is a whole number
  questionThree: undefined, // replace undefined with testNumber converted to a string
  questionFour: undefined, // replace undefined with testNumber at only one, fixed decimal place
  questionFive: undefined, // replace undefined with testNumber at only one, fixed decimal place
  questionSix: undefined, // replace undefined with testNumber at only one, fixed decimal place
  questionSeven: undefined, // replace undefined with testNumber at only one, fixed decimal place
};

console.log(`questionOne: ${answer.questionOne === questionOne ? "✅" : "❌"}`);
console.log(`questionTwo: ${answer.questionTwo === questionTwo ? "✅" : "❌"}`);
console.log(
  `questionThree: ${answer.questionThree === questionThree ? "✅" : "❌"}`
);
console.log(
  `questionFour: ${answer.questionFour === questionFour ? "✅" : "❌"}`
);
console.log(
  `questionFive: ${answer.questionFive === questionFive ? "✅" : "❌"}`
);
console.log(`questionSix: ${answer.questionSix === questionSix ? "✅" : "❌"}`);
console.log(
  `questionSeven: ${answer.questionSeven === questionSeven ? "✅" : "❌"}`
);
