// 242. Valid Anagram
//
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//     An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    return reorder(s) === reorder(t);
};

const reorder = (str) => str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

console.log(isAnagram('victory', 'yrotciv')); // true