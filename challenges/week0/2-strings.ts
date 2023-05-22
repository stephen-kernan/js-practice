/*
Strings are actually just two or more characters put together.
A character is a letter inside of quotation marks (i.e., 'a', 'b', 'c').
Strings have various built-in 'methods' which can be used to manipulate the string
or to find out more information about its contents.

You can think of a 'method' as a built-in action that is shared among all
instances of the same datatype. Strings, Numbers, Booleans, Arrays, and Objects
each have unique methods that we'll test out here.

If you Google the descriptions in the comments to the right,
you should be able to find the method that accomplishes the goal.

DON'T MANUALLY TYPE THE ANSWERS
*/

export const testString = 'I see dead people'

export const answer: {
  howManyCharacters?: number;
  fifthCharacter?: string;
  upperCase?: string;
  lowerCase?: string;
  carvedUp?: string[];
  itsAliveee?: string;
} = {
  howManyCharacters: testString.length, // replace undefined with the length of the string
  fifthCharacter: testString.charAt(4), // replace undefined with the fifth character
  upperCase: testString.toUpperCase(), // replace undefined with the string in uppercase
  lowerCase: testString.toLowerCase(), // replace undefined with the string in lowercase
  carvedUp: testString.split(' '), // replace undefined with the string split into a list of its individual words
  itsAliveee: testString.replace('dead', 'living'), // replace undefined with the same string, replacing 'dead' with 'living'
}

export const carvedCorrectly = answer.carvedUp?.length === 4
  && answer.carvedUp?.includes('I')
  && answer.carvedUp?.includes('see')

console.log(
  `howManyCharacters: ${answer.howManyCharacters === 17 ? '✅' : '❌'}`,
)
console.log(`fifthCharacter: ${answer.fifthCharacter === 'e' ? '✅' : '❌'}`)
console.log(
  `upperCase: ${answer.upperCase === 'I SEE DEAD PEOPLE' ? '✅' : '❌'}`,
)
console.log(
  `lowerCase: ${answer.lowerCase === 'i see dead people' ? '✅' : '❌'}`,
)
console.log(`carvedUp: ${carvedCorrectly ? '✅' : '❌'}`)
console.log(
  `itsAliveee: ${answer.itsAliveee === 'I see living people' ? '✅' : '❌'}`,
)
