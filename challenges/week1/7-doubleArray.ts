// PROMPT
// Create a function that takes an array of numbers and returns a new array which
// doubles each of the numbers in the original array.

export function doubleArray(arr: number[]): number[] {
  return arr.map((x: number) => x * 2)
}
