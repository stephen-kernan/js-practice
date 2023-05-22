// PROMPT
// Create a function that takes an object and returns a new object which rotates all
// key/value pairs by one. For example:
// { key1: val1, key2: val2 } will become { key1: val2, key2: val1 }

function rotateKeys(obj: { [index: string]: any }) {
  const newObj: { [i: string]: any } = {}

  const keys = Object.keys(obj)
  const values = Object.values(obj)

  // remove the last value
  const lastVal = values.pop()

  // insert last value first
  values.unshift(lastVal)

  // re-zip the object together
  keys.forEach((k, idx) => {
    newObj[k] = values[idx]
  })

  return newObj
}

console.log(rotateKeys({ key1: 'val1', key2: 'val2', key3: 'val3' }))
