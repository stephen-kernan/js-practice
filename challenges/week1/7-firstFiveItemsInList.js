import { createInterface } from "readline";

// create a function that returns only the first letter of a word
// if it's not possible based on input, return a string that says 'Error processing data'

export const findFirstFiveItemsInList = (list) => {
  // do something here
  if (!Array.isArray(list) || !list.length) {
    return "Error processing data";
  }

  return list.slice(0, 5);
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
