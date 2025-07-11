/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 1; i < nums.length; i++) {
    for (let y = 0; y < nums.length; y++) {
      if (nums[i] + nums[y] === target && i != y) {
        return [i, y];
      }
    }
  }
};
