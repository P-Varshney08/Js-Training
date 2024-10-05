// You are given an array of n elements and a sum value, you have to calculate the total number of ways to calculate the given sum using the elements of the array by using only addition(+) and subtraction operator(-).

// Constraints:
// <pre>
// Value of n should lie between [1,15]
// </pre>
// Sample Input:
// <pre>

// arr => [-1, 9, 8, -3, 4]
// value sum => 5
// </pre>
// Sample Output:
// <pre>
// 8
// </pre>
// Explanation:
// <pre>
// The ways to get 5 as sum are:
// (+)-3 (+)9 (+)-1 
// (+)-3 (+)8 
// (-)-3 (-)8 (+)9 (-)-1 
// (+)4 (-)-1 
// (+)4 (-)8 (+)9 
// (+)4 (-)-3 (+)8 (-)9 (+)-1 
// (-)4 (+)9 
// (-)4 (+)8 (-)-1
// </pre> 