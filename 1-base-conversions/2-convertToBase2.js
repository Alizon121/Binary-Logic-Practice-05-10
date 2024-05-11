// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
if (typeof element === 'string') {
  // parseInt() returns a base10
  let base10 = parseInt(element.slice(2), 16)
  // The toString() returns a base2 or base 16 from a base10
  return '0b' + base10.toString(2)
} 
else {
  return '0b' + element.toString(2)
}
};

/******************************************************************************/
// Base10
// use toString() to convert decimal to base-2 or base-16
console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

// base16
console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
