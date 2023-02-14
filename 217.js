//217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array,
//     and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
};