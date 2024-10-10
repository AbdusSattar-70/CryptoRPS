function reverseNumber(number) {
  // Check if the input is a valid integer
   if (typeof number !== 'number' || Number.isNaN(number) || !Number.isInteger(number)) {
        console.log('Input must be a valid integer');
        return;
    }

  const numString = String(number);
  const reversedString = numString.split('').reverse().join('');
  const result = parseInt(reversedString, 10);

  return result;
}

// Example usage:
console.log(reverseNumber(3.525)); // Output: Input must be a valid integer
console.log(reverseNumber(true)); // Output: Input must be a valid integer
console.log(reverseNumber('1234')); // Output: Input must be a valid integer

console.log(reverseNumber(1223)); // Output: 3221
console.log(reverseNumber(987654321)); // Output: 123456789