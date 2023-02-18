let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const swapIndexes = (array) => {
    [array[0], array[10]] = [array[10], array[0]]
    return array
}
console.log(swapIndexes(array))
// [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


const binarySearch = (sortedArray, target) => {
    let start = 0;
    let end = sortedArray.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (sortedArray[mid] === target) return target;
        else if (sortedArray[mid] < target) {
            start = mid + 1;
        } else end = mid - 1;
    } return -1
}

console.log(binarySearch([0,1,2,3,4,5], 6))