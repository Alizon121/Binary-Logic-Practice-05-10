const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works



/******************************************************************************/
// The addZeros() helper function adds 0s to the beginning of a string.
// Convert the ASCII into binary using charCodeAt() and then invoke addZeros() on the binary string. 


const asciiTo8bit = str => {
let result = '';
for (let i = 0; i < str.length; i++) {
  let decimal = str.charCodeAt(i);
  let binary = decimal.toString(2)
  let zero = addZeros(binary, 8)
  result += zero
}
return result
};

/******************************************************************************/

// console.log(asciiTo8bit('123'));
// 001100010011001000110011

// console.log(asciiTo8bit('ABC'));
// // 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
