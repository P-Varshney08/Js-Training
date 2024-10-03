function sumNestedArray(arr) {
    // Handle edge cases: If the array is empty, return 0
    // if array contains a number return that
    if (!Array.isArray(arr)) {
        return typeof arr === 'number' ? arr : 0;
    }

    // Recursive case: Apply the same function to every element in the array and then sum
    return arr.reduce((sum, element) => sum + sumNestedArray(element), 0);
}

// Test case
console.log(sumNestedArray([1, [2, [3, 4]], 5]));
