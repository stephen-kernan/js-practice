// PROMPT
// Create a function that takes an array and a number N as an input
// The function should return true if there is an even number in the first N numbers
function isEven(n) {
    console.log('func called');
    return (n % 2) === 0;
}
function containsEvenNumber(arr, n) {
    for (var i = 0; i < n && i < arr.length; i += 1) {
        if (isEven(arr[i])) {
            return true;
        }
    }
    return false;
}
console.log(containsEvenNumber([1, 3, 3], 500));
