/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    if (mp.hasOwnProperty(nums[i])) {
      return [i, mp[nums[i]]];
    }
    mp[target - nums[i]] = i;
  }
};
