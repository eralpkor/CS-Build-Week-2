// # Two Sum

// # Share
// # Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// # You may assume that each input would have exactly one solution, and you may not use the same element twice.

// # Example:

// # Given nums = [2, 7, 11, 15], target = 9,

// # Because nums[0] + nums[1] = 2 + 7 = 9,
// # return [0, 1].

// brute Force solution O(n^)
// The space complexity is constant because it doesn’t need any temporary buffer to store the data.
// const twoSum = (nums, target) => {
//   var result = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if(nums[i] + nums[j] === target) {
//         result.push(i);
//         result.push(j);
//       }
//     }
//   }
//   return result;
// };

// O(n) solution
var twoSum = (nums, target) => {
  var obj = {}

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    obj[element] = i
  }

  for (let i = 0; i < nums.length; i++) {
    let element = target - nums[i];

    if (obj.hasOwnProperty(element) && obj[element] !== i) {
      return [i, obj[element]]
    }
  }
}


var nums = [2, 7, 11, 15], target = 9;
var nums2 = [3,2,4], target2 = 6;

console.log(twoSum(nums2, target2))

twoSum(nums2, target2)