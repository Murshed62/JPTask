function reverseString(inputString) {
  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }

  return reversedString;
}

const input = "hello world";
const reversed = reverseString(input);
console.log(reversed);