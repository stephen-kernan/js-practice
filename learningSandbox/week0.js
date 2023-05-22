// Learning information
var string = 'This is a string';
var number = 1234;
var boolean = true;
var array = [1, 2, 3];
var object = {
    key: 'value'
};
function testing() {
    return 'testing';
}
console.log('String: ', string.concat('one two three'));
console.log('Number: ', number.toString());
console.log('Boolean: ', "".concat(boolean));
console.log('Array: ', array.toString());
console.log('Object: ', JSON.stringify(object));
console.log('Function: ', testing());
