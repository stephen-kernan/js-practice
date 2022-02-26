import { createInterface } from "readline";

// create a function that returns a user's first name and last name combined into one string
// if it's not possible based on input, return a string that says 'Error processing data'

export const combineUserName = () => {
  // do something here
};

// UNCOMMENT EVERYTHING IN THIS LINE TO TRY IT OUT IN TERMINAL
// const term = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// term.question("Please enter a first name and a last name separated by one space\n", (input) => {
//   try {
//     const parsedInput = input.split(" ");
//     const [firstName, lastName] = parsedInput;

//     console.log(
//       "Result: ",
//       combineUserName(firstName, lastName)
//     );
//   } catch (e) {
//     console.log("Error: ", e);
//   } finally {
//     term.close();
//   }
// });
