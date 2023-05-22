/*
Numbers aren't too complicated - they're numbers in the same sense you'd expect.
Some languages distinguish between Integer and Float (decimal) numbers, but Javascript
does not.

Fill in the answers based on the description using the most relevant method for
the Number datatype.
*/

export const testNumber: number = 5.25

export const answer: {
  isNotNumber?: boolean;
  isWholeNumber?: boolean;
  toString?: string;
  oneFixedDecimal?: string;
} = {
  isNotNumber: Number.isNaN(testNumber), // replace undefined with whether testNumber is a number
  isWholeNumber: Number.isInteger(testNumber), // replace undefined with whether or not testNumber is a whole number
  toString: testNumber.toString(), // replace undefined with testNumber converted to a string
  oneFixedDecimal: testNumber.toFixed(1), // replace undefined with testNumber at only one, fixed decimal place
}

console.log(`isNotNumber: ${!answer.isNotNumber ? '✅' : '❌'}`)
console.log(`isWholeNumber: ${!answer.isWholeNumber ? '✅' : '❌'}`)
console.log(`toString: ${answer.toString === '5.25' ? '✅' : '❌'}`)
console.log(`oneDecimal: ${answer.oneFixedDecimal === '5.3' ? '✅' : '❌'}`)
