// Implement a calculator function that performs basic calculation operations but the number of arguments provided is not known beforehand.
// ex: Addition of 9,4,12,16,23 and 43

/**
 * This calculator function is responsible for calculating diffferent functions having variable arguments which are not known beforehand
 */
const calculator = (operation, ...args) => {
    if(args.length===0){
        throw new error("No arguments provided");
    }
    switch(operation) {
        case 'add':
            return args.reduce((acc, curr) => acc+curr, 0);
        case 'subtract':
            return args.reduce((acc, curr) => acc-curr);
        case 'multiply':
            return args.reduce((acc, curr) => acc*curr, 1);
        case 'divide':
            return args.reduce((acc, curr) => {
                if (curr === 0) throw new Error('Division by zero is not allowed');
                return acc / curr;
            });
        default:
            throw new Error(`Invalid operation: ${operation}`);
    }
}

console.log(calculator('subtract', 2, 3, 4, 10));

// Test cases
try {
    console.log('Addition of 9, 4, 12, 16, 23, 43:', calculator('add', 9, 4, 12, 16, 23, 43)); // Output: 107
    console.log('Subtraction of 50, 10, 5:', calculator('subtract', 50, 10, 5)); // Output: 35
    console.log('Multiplication of 2, 4, 3:', calculator('multiply', 2, 4, 3)); // Output: 24
    console.log('Division of 100, 2, 5:', calculator('divide', 100, 2, 5)); // Output: 10
} catch (error) {
    console.error(error.message);
}