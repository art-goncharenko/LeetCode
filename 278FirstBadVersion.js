// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check. Since each version is developed
// based on the previous version, all the versions after a bad version are also bad.
//     Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
//     which causes all the following ones to be bad.
//     You are given an API bool isBadVersion(version) which returns whether version is bad.
//     Implement a function to find the first bad version. You should minimize the number of calls to the API.

//test API
function isBadVersion(version) {
    if (version >= 4) {
        return true;
    }
}

let solution = function (isBadVersion) {
    return function (n) {
        let start = 1;
        let end = n;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (isBadVersion(mid)) {
                if (isBadVersion(mid - 1)) {
                    end = mid - 1;
                } else return mid;
            } else start = mid + 1;
        }
    };
};

console.log(solution(isBadVersion)(5)); // 4
