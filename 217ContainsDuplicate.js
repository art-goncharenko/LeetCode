//217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array,
//     and return false if every element is distinct.

// Solution 1: Set

// const containsDuplicate = function(nums) {
//     let set = new Set(nums);
//     return set.size !== nums.length;
// };

// Solution 2: Brute Force
const containsDuplicate = (nums) => {
    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */
    return hasDuplicate(nums);
}

const hasDuplicate = (nums) => {
    for (let curr = 0; curr < (nums.length - 1); curr++) {/* Time O(N) */
        const next = (curr + 1);

        const isNextDuplicate = nums[curr] === nums[next];
        if (isNextDuplicate) return true;
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));