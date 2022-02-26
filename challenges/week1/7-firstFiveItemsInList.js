import { createInterface } from "readline";

// create a function that returns up to the first five items of an array
// if a list has some items but less than five, return just the available items
// if it's not possible based on input, return a string that says 'Error processing data'

export const findFirstFiveItemsInList = (list) => {
  // do something here
};

// UNCOMMENT EVERYTHING IN THIS LINE TO TRY IT OUT IN TERMINAL
// const term = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// term.question("Please enter two numbers separated by one space\n", (input) => {
//   try {
//     const parsedInput = JSON.parse(input);

//     console.log(
//       "Result: ",
//       findFirstFiveItemsInList(parsedInput)
//     );
//   } catch (e) {
//     console.log("Error: ", e);
//   } finally {
//     term.close();
//   }
// });
