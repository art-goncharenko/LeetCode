// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 8;

let search = function (nums, target) {
    let start = 0,
        end = nums.length - 1;

    // Iterate as long as the beginning does not encounter the end.
    while (start <= end) {
        // find out the middle index
        let mid = Math.floor((start + end) / 2);
        // Return True if the element is present in the middle.
        if (nums[mid] === target) return mid;
        // Otherwise, look in the left or right half
        else if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
};

console.log(search(nums, target)); // true