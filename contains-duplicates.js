// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = (nums) => {
  // return false for empty and single value array
  if (nums.length <= 1) return false
  // sort the given array
  nums.sort(); // O(n log n) time complexity. O(1) space complexity

  // loop through the sorted array and return first found duplicate
  for (let i = 0; i < nums.length - 1; i++) { // O(n) time complexity
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}


var nums1 = [1,1,1,3,3,4,3,2,4,2];
var nums2 = [1,2,3,4]
var nums3 = [1,2,3,1]

var nums4 = [2,14,18,22,22]

// console.log(containsDuplicate(nums1)) // true
// console.log(containsDuplicate(nums2)) // false
// console.log(containsDuplicate(nums3)) // true

console.log(containsDuplicate(nums4)) // true