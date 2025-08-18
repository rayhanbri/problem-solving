// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// function reversedString(str){
//     const string = str
//     const split=string.split("")
//     const reverse=split.reverse()
//     const join=reverse.join("")
//     console.log(join)
// }

// reversedString('mam')


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// function vowelCounter(str){
//     const vowel ="aeiouAEIOU";
//     let count = 0 ;

//     for(let char of str ){
//         // console.log(char)
//         if(vowel.includes(char)){
//             count ++;
//         }
//     }
//     console.log(count)
// }

// vowelCounter('helohibyebye')


// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// function palindromeChecker (palindrome){
//     const reverse= palindrome.split("").reverse().join("")

//     if(palindrome === reverse){
//         return true;
//     }
//     else{
//         return false;
//     }
   
// }

// console.log(palindromeChecker("mam"))


// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// function findLargeNumber(array){
//     return Math.max(...array)
// }

// console.log(findLargeNumber([1,3,10]))


// Problem 5: Remove Duplicates from an Array Write a function that removes all duplicate numbers from an array.

// function removeDuplicate(array) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!newArray.includes(array[i])) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// console.log(removeDuplicate([1,3,3,1]))


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// function sum(array){
//     let sum =0;
//     for(let number of array){
//         // sum = sum + number;
//         sum += number;
//     }
//     return sum;
// }
// console.log(sum([1,2,3]))

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array

// function findEvenNumbers(arr) {
//     let evenNumbers = []; 
//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i]; 

        
//         if (current % 2 === 0) {
//             evenNumbers.push(current);
//         }
//     }
//     return evenNumbers;
// }

// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 


// Problem 8: Capitalize First Letter of Each Word


// function capitalizeWords(sentence) {
//     let words = sentence.split(" ");

    
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];

        
//         words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }

//     return words.join(" ");
// }

// console.log(capitalizeWords("hello world from rayhan"));


//Problem-09 Write a function that calculates the factorial of a number using a loop.

// 5*4*3*2*1=120 

// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result = result * i;  
//     }
//     return result;
// }

// console.log(factorial(5));


// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

function pingPongChallenge() {
  let result = []; 

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }

  console.log(result.join(", "));
}

// Run function
pingPongChallenge();






