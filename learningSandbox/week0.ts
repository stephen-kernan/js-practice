// Learning information
const string = 'This is a string'
const number = 1234
const boolean = true
const array = [1, 2, 3]
const object = {
  key: 'value',
}

function testing(): string {
  return 'testing'
}

console.log('String: ', string.concat('one two three'))
console.log('Number: ', number.toString())
console.log('Boolean: ', `${boolean}`)
console.log('Array: ', array.toString())
console.log('Object: ', JSON.stringify(object))
console.log('Function: ', testing())
