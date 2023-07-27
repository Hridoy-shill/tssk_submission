// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
  let right = arr.length - 1; 

  for (let i = 0; i < arr.length; i++) {
     for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return 'No sun funding'
}

const inputArray = [1, 4, 9, 5, 16, 8, 10, 15];
const targetValue = 9;

const result = findTwoNumbersWithSum(inputArray, targetValue);
console.log(result);
