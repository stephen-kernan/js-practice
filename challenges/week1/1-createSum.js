import { createInterface } from "readline";

// create a function that returns the sum of two numbers
// if the input is bad, return a string that says 'Error processing data'

export const createSum = (a, b) => {
  // do something here
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error processing data"
  }

  if (!a || !b) {
    return "Error processing data";
  }

  return a + b
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