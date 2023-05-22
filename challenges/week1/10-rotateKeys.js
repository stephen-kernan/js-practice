// PROMPT
// Create a function that takes an object and returns a new object which rotates all
// key/value pairs by one. For example:
// { key1: val1, key2: val2 } will become { key1: val2, key2: val1 }
function rotateKeys(obj) {
    var newObj = {};
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    // remove the last value
    var lastVal = values.pop();
    // insert last value first
    values.unshift(lastVal);
    // re-zip the object together
    keys.forEach(function (k, idx) {
        newObj[k] = values[idx];
    });
    return newObj;
}
console.log(rotateKeys({ key1: 'val1', key2: 'val2', key3: 'val3' }));
