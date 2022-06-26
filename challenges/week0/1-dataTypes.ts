/*
These are the five datatypes most commonly used
in React (not including classes and functions,
which we'll get to later). You can find more information
about them by Googling 'Javascript {dataType}'.

Replace the 'undefined' value next to the datatype with
an example of the appropriate datatype.
*/

export const dataTypes: {
  null: null;
  string: string;
  number: number;
  boolean: boolean;
  array: [];
  object: {};
} = {
  null: undefined,
  string: undefined, // replace null with a string
  number: undefined, // replace null with a number
  boolean: undefined, // replace null with a boolean
  array: undefined, // replace null with an array
  object: undefined, // replace null with an object
};

console.log(`String: ${typeof dataTypes.string === "string" ? "✅" : "❌"}`);
console.log(`Number: ${typeof dataTypes.number === "number" ? "✅" : "❌"}`);
console.log(`Boolean: ${typeof dataTypes.boolean === "boolean" ? "✅" : "❌"}`);
console.log(`Array: ${Array.isArray(dataTypes.array) ? "✅" : "❌"}`);
console.log(
  `Object: ${
    typeof dataTypes.object === "object" && !Array.isArray(dataTypes.object)
      ? "✅"
      : "❌"
  }`
);
