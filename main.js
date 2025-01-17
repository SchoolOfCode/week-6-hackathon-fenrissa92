//Hello challenger! Your task is to write a function named `reverseText` that reverses the input string completely.
 
//Examples:
// reverseText("john McClane") -> "enalCcm nhoj"
// reverseText("Hello World") -> "dlroW olleH"

//Constraints:
//The input will always be a string.
//The input may include spaces and mixed case letters.

export function reverseText(str) {
    return str.split("").reverse().join("");
  }