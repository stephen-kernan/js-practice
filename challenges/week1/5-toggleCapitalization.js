import { createInterface } from "readline";

// create a function that returns the word provided with the first letter capitalized as follows:
//  1. capitalized first letter if the given word IS NOT capitalized
//  2. uncapitalized first letter if the given word IS capitalized
// if it's not possible based on input, return a string that says 'Error processing data'

export const toggleCapitalization = () => {
  // do something here
};

// UNCOMMENT EVERYTHING IN THIS LINE TO TRY IT OUT IN TERMINAL
// const term = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// term.question("Please enter a word\n", (input) => {
//   try {
//     console.log(
//       "Result: ",
//       toggleCapitalization(input)
//     );
//   } catch (e) {
//     console.log("Error: ", e);
//   } finally {
//     term.close();
//   }
// });
