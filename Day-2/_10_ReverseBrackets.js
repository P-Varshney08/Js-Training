// For a given expression in the form of a string, find the minimum number of brackets that can be reversed in order to make the expression balanced. The expression will only contain curly brackets.
// If the expression can't be balanced, return -1.

// Example
// Expression: {{{{
// If we reverse the second and the fourth opening brackets, the whole expression will get balanced. Since we have to reverse two brackets to make the expression balanced, the expected output will be 2.

// Expression: {{{
// In this example, even if we reverse the last opening bracket, we would be left with the first opening bracket and hence will not be able to make the expression balanced and the output will be -1.


// Input Format :
// The first and the only line of input contains a string expression, without any spaces in between.

// Output Format :

// The only line of output will print the number of reversals required to balance the whole expression. Prints -1, otherwise.

// Sample Input 1:  {{{
// Sample Output 1:  -1

// Sample Input 2:  {{{{}}
// Sample Output 2:  1


const minReversal = (expression) => {
    if(expression.length%2==1){
        return -1;
    }
    let stack = [];
    let openCount = 0;
    let closeCount=0;
    for(let i=0; i<expression.length; i++){
        // push opening bracket to stack
        if(expression[i]==="{"){
            openCount++;
            stack.push(expression[i]);
        } else{
            if(stack.length > 0 && stack[stack.length-1]==='{'){
                openCount--;
                stack.pop();
            }
            else{
                closeCount++;
                stack.push(expression[i]);
            }
        }
    }

    if(stack.length===0){   // expression is balanced
        return 0;
    } else{
        return Math.floor(openCount/2) + Math.floor(closeCount/2) + (openCount%2)*2;
    }
}

const exp = "}{}}}{";
// const exp = "}}}{{{";
// const exp = "{}}}{{}{";

console.log(minReversal(exp)); 