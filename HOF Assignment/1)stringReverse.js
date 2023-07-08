// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

function stringRevese(string){
    setTimeout(()=>{
        let reversedWord = string.split("").reverse().join(""); 
        console.log(reversedWord);
    },2000);
}

stringRevese("Sarvesh");


console.log("Another Method");

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  let input = "hello";
  
  setTimeout(() => {
    let reversedInput = reverseString(input);
    console.log( reversedInput);
  }, 2000);