let array = [3, 5, 1, 2, 4, 8, 7, 6, 9, 10, 15]

const swapIndexes = (array) => {
    [array[0], array[10]] = [array[10], array[0]]
    return array
}
console.log(swapIndexes(array))