import { createInterface } from "readline";

// create a function that returns a user's first name and last name combined into one string
// if it's not possible based on input, return a string that says 'Error processing data'

export const combineUserName = (a, b) => {
  // do something here
  if (typeof a !== "string" || typeof b !== "string") {
    return "Error processing data";
  }

  if (!a || !b) {
    return "Error processing data";
  }

  return a + " " + b;
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
