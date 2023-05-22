// PROMPT
// Create a function that takes two numbers, which returns the value of the
// first number doubled N times, where N is the second number provided.

export function doubleRepeatedly(numberToDouble: number, n: number): number {
  let result = numberToDouble
  for (let i = 0; i < n; i += 1) {
    result *= 2
  }
  return result
}
