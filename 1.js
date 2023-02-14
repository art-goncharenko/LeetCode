//Selection Sort Algorithm in JavaScript

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let curMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[curMin]) {
                curMin = j
            }
        }
        if (curMin !== i) {
            // Swap
            [arr[i], arr[curMin]] = [arr[curMin], arr[i]]
        }
    }
    return arr
}
console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]