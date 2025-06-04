function reverseNumber(x) {
    if (typeof x === 'number') {
        x = x.toString().split('').reverse().join('');
        // x.toString() : Convert the number x to a string "32243"
        // .split() : Splits the string into an array of individual characters ['3', '2', '2', '4','3'] 
        // .reverse : Reverse the order of elements in the array ['3', '4', '2', '2', '3'] 
        return parseInt(x);
    } else {
        throw new TypeError('Input must be a number');
    }
}
let x = 32243;
console.log(reverseNumber(x)); // Output: 54321