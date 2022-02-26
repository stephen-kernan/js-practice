import { createInterface } from "readline";

// create a function that returns the capitalized version of the word provided
// if it's not possible based on input, return a string that says 'Error processing data'

export const toggleCapitalization = (word) => {
  // do something here
  if (!word || typeof word !== "string") {
    return "Error processing data";
  }

  if (word[0] === word[0].toLocaleUpperCase()) {
    return word[0].toLocaleLowerCase() + word.slice(1, word.length);
  }

  return word[0].toLocaleUpperCase() + word.slice(1, word.length);
};

// UNCOMMENT EVERYTHING IN THIS LINE TO TRY IT OUT IN TERMINAL
// const term = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// term.question("Please enter two numbers separated by one space\n", (input) => {
//   try {
//     const parsedInput = input.split(" ");
//     const [firstNumber, secondNumber] = parsedInput;

//     console.log(
//       "Result: ",
//       createSum(Number(firstNumber), Number(secondNumber))
//     );
//   } catch (e) {
//     console.log("Error: ", e);
//   } finally {
//     term.close();
//   }
// });
