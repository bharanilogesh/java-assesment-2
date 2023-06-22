// 1. Write a JavaScript program to find the length of a given string.
// Sample Input: Hello;
// Sample Output: 5

function findStringLength(str) {
  return str.length;
}

const inputstring = "coimbatore";
const length = findStringLength(inputstring);
console.log(length);


// 2. Write a JavaScript function to concatenate two arrays.
// Sample Input: ([1, 2, 3], [4, 5, 6]);
// Sample Output: [1, 2, 3, 4, 5, 6]

function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

const array1 = [1,2,3,4];
const array2 = [5,6,7,8];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray);


// 3. Write a JavaScript program to swap the values of two variables.
// Sample Input: x = 5, y = 10;
// Sample Output: [10, 5]

function swapVariables(a,b) {
  console.log("Before swapping: a =", a, "b =", b);

  let temp = a;
  a = b;
  b = temp;

  console.log("After swapping: a =", a, "b =", b);
} 

let c = 10;
let d = 20;

swapVariables(c, d);

// 4. Write a JavaScript program to calculate the average of an array of numbers.
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Ouput: 3

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; 
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const average = sum / numbers.length;
  return average;
}

const numberArray = [4, 8, 2, 10, 6];
const average = calculateAverage(numberArray);
console.log("Average:", average);




// 5. Write a JavaScript function to find the largest and smallest elements in an array.
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Output: [1, 5]

function findLargestAndSmallestElements(array) {
  if (array.length === 0) {
    return "Array is empty.";
  }

  let smallest = array[0];
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return {
    smallest: smallest,
    largest: largest
  };
}

const Array = [4, 8, 2, 10, 6];
const result = findLargestAndSmallestElements(numberArray);
console.log("Smallest element:", result.smallest);
console.log("Largest element:", result.largest);



// 6. Write a JavaScript function to find the index of the first occurrence of a given element in an array.
// Sample Input: ([1, 2, 3, 4, 5], 3);
// Sample Output: 2

function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1; 
}


const array = [3, 7, 2, 9, 4, 2, 5];
const element = 2;

const index = findIndex(array, element);
console.log(index); 



// 7. Write a JavaScript function to check if a given string is a valid email address.
// Sample Input: ("test@example.com");
// Sample Output: true

function isValidEmail(email) {
  const emailPattern = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
  
  return emailPattern.test(email);
}

const email = "example@example.com";
const isValid = isValidEmail(email);
console.log(isValid); 




// 8. Write a JavaScript program to count the number of occurrences of each element in an array.
// Sample Input: ([1, 2, 2, 3, 3, 3]);
// Sample Output: {1: 1, 2: 2, 3: 3}

function countOccurrences(arr) {
  const occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (occurrences[element]) {
      occurrences[element]++;
    } else {
      occurrences[element] = 1;
    }
  }

  return occurrences;
}

const array3 = [1, 2, 3, 2, 1, 3, 4, 5, 1];
const occurrences = countOccurrences(array);
console.log(occurrences);




// 9. Write a JavaScript function to implement a binary search algorithm on a sorted array.
// Sample Input: ([1, 2, 3, 4, 5], 4);
// Sample output: 3

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}


const array4 = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const index3s = binarySearch(array, target);
console.log(index); 



// 10. Write a JavaScript program to find the intersection of two arrays (common elements).
// Sample Input: ([1, 2, 3], [2, 3, 4]);
// Sample Output: [2, 3]

function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersection = [];

  for (const element of arr2) {
    if (set1.has(element)) {
      intersection.push(element);
    }
  }

  return intersection;
}

const array5 = [1, 2, 3, 4, 5];
const array6 = [4, 5, 6, 7, 8];

const intersection = findIntersection(array5, array6);
console.log(intersection); 
