/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 Without extra variable, better memory, worse time
 Accepted, runtime - 87%, memorey - 43%
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

/**
 With extra variable, better time, worse memory
 Accepted, runtime - 96%, memorey - 29%
 */
var twoSum = function (nums, target) {
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    let c = target - nums[i];
    if (mp.hasOwnProperty(nums[i])) {
      return [i, mp[nums[i]]];
    }
    mp[c] = i;
  }
};
