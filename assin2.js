// 1 number question

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(0));  // 32
  console.log(celsiusToFahrenheit(25)); // 77
  console.log(celsiusToFahrenheit(100)); // 212 (boiling point of water)

  
//   2 number question

function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  console.log(isEven(10)); // true
  console.log(isEven(13)); // false

//   3 num question

function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4));   // 7
  console.log(sum(10, 20)); // 30
  console.log(sum(-5, 5));  // 0
  console.log(sum(1.5, 2.5)); // 4

  
//   4 num question


function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  console.log(findSmallestNum([7, 2, 8, 4])); // 2
  console.log(findSmallestNum([12, 15, 9, 11])); // 9

  
//   5 num question

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  console.log(countVowels("Programming")); // 3
  console.log(countVowels("AI and ML")); // 3

  
//   6 num question

function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([true, false, true])); // true
  console.log(getFirstElement([])); // undefined

  
//   7 num question

// Write a function to check if an array is empty. The function should take a single argument, which is the array.
function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false
  console.log(isArrayEmpty(['a', 'b', 'c'])); // false
  console.log(isArrayEmpty([null])); // false
  console.log(isArrayEmpty([undefined])); // false

  
//   8 num question

function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040
  console.log(factorialize(0)); // 1
  console.log(factorialize(1)); // 1
  console.log(factorialize(10)); // 3628800

  
//   9 num question

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  console.log(reverseString("JavaScript")); // "tpircSavaJ"
  console.log(reverseString("12345")); // "54321"

  
//   10 num question

function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"
  console.log(toLowerCase("HeLLo WoRLD")); // "hello world"
  console.log(toLowerCase("123 ABC")); // "123 abc"

//   11 num question

function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5
  console.log(stringLength("JavaScript")); // 10
  console.log(stringLength("")); // 0

  
//   12 num question

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  console.log(mergeArrays([], [1, 2, 3])); // [1, 2, 3]
  console.log(mergeArrays([4, 5], [])); // [4, 5]

  
//   13 num question

function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  console.log(getLastElement([true, false, true])); // true
  console.log(getLastElement([])); // undefined

  
//   14 num question

function getFirstCharacter(str) {
    return str.charAt(0);
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
  console.log(getFirstCharacter("JavaScript")); // "J"
  console.log(getFirstCharacter("")); // ""

  
//   15 num question

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  console.log(sumArray([])); // 0
  console.log(sumArray([10, 20, 30, 40])); // 100
  

