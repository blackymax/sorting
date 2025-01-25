const quickSearch = (range) => {
    // CAUTION: use <= 1 to catch empty arrays
    if (range.length <= 1) {
        return range
    }
    const pivot = range[range.length - 1];
    const leftPart = [];
    const rightPart = [];
    
    // CAUTION: range length - 1 and "<" operator exludes latest value from the range to proceed with recursion
    for (let i = 0; i < range.length - 1; i++) {
        if (range[i] > pivot) {
            rightPart.push(range[i])
        } else {
            leftPart.push(range[i])
        }
    }
    return [...quickSearch(leftPart), pivot, ...quickSearch(rightPart)]
}


console.log({ result: quickSearch([2, 1, 5, 4, 3, 6, 9, 8, 7]) })