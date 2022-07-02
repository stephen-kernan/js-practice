/*
Numbers aren't too complicated - they're numbers in the same sense you'd expect.
Some languages distinguish between Integer and Float (decimal) numbers, but Javascript
does not.

Fill in the answers based on the description using the most relevant method for
the Number datatype.
*/

// Example: Make an object called 'car' that has a make, model, year, and numberOfDoors.

export const car: {
  make: string;
  model: string;
  year: number;
  numberOfDoors: number;
} = {
  make: "Ford",
  model: "Focus",
  year: 2005,
  numberOfDoors: 4,
};

// 1. Add a key/value pair to the object where the key is font and the value is a string of your favorite font
export const firstQuestion: {
  font?: string | null;
} = {};
// hint: do something here to add the value

export const firstAnswer: {
  font?: string | null;
} = firstQuestion;

// 2. Change the value of secondAnswer to be the value you just added to `font` key of
//    firstAnswer (don't type it out, access it in the dictionary)
export const secondAnswer: string | null = null; // replace this value

// 3. Make a list of the keys in the following object using the built in Object method,
//    then write the method you used below.
export const thirdQuestion: {} = {
  firstKey: 1,
  secondKey: 2,
  thirdKey: 3,
};
export const thirdAnswer: string[] | null = null; // replace this value
export const thirdMethod: string | null = null; // fill in the name of the method you used

// 4. Make a list of the values in the following object using the built in Object method,
//    then write the method you used below.
export const fourthQuestion: {} = {
  firstKey: 1,
  secondKey: 2,
  thirdKey: 3,
};
export const fourthAnswer: string[] | null = null;
export const fourthMethod: string | null = null;

// run this script to see what your answers are
console.log(`firstAnswer: ${firstAnswer}`);
console.log(`secondAnswer: ${secondAnswer}`);
console.log(`thirdAnswer: ${thirdAnswer}`);
console.log(`fourthAnswer: ${fourthAnswer}`);
