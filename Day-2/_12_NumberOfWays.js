// You are given an array of n elements and a sum value, you have to calculate the total number of ways to calculate the given sum using the elements of the array by using only addition(+) and subtraction operator(-).

// Constraints:
// Value of n should lie between [1,15]
// Sample Input:

// arr => [-1, 9, 8, -3, 4]
// value sum => 5
// Sample Output:
// 8
// Explanation:
// The ways to get 5 as sum are:
// (+)-3 (+)9 (+)-1 
// (+)-3 (+)8 
// (-)-3 (-)8 (+)9 (-)-1 
// (+)4 (-)-1 
// (+)4 (-)8 (+)9 
// (+)4 (-)-3 (+)8 (-)9 (+)-1
// (-)4 (+)9 
// (-)4 (+)8 (-)-1


let arr = [-1, 9, 8, -3, 4];
let sum = 5;
console.log(findWays(arr, sum));

function findWays(arr, sum) {
    function dfs(currentSum, currentIndex) {
        if (currentIndex === arr.length) {
            return currentSum === sum? 1 : 0;
        }
        
        // Explore both adding and subtracting the current element
        let notSelected = dfs(currentSum, currentIndex+1);
        let selected = dfs(currentSum + arr[currentIndex], currentIndex + 1) + dfs(currentSum - arr[currentIndex], currentIndex + 1);
        
        return notSelected + selected;
    }

    return dfs(0, 0);
}

