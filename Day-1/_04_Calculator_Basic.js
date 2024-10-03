// Implement a calculator to perform the following operation
// - Simple algebraic operations like add, subtract, multiply, divide, modulus, etc.

const calculator = (operation, ...args) => {
    if (args.length === 0) {
        throw new Error('No arguments provided');
    }

    switch (operation) {
        case 'add':
            return args.reduce((acc, curr) => acc + curr, 0);
        case 'subtract':
            return args.reduce((acc, curr) => acc - curr);
        case 'multiply':
            return args.reduce((acc, curr) => acc * curr, 1);
        case 'divide':
            return args.reduce((acc, curr) => {
                if (curr === 0) throw new Error('Division by zero is not allowed');
                return acc / curr;
            });
        case 'modulus':
            return args.reduce((acc, curr) => acc % curr);
        default:
            throw new Error('Invalid operation');
    }
};

// Test cases
try {
    console.log('Addition of 9, 4, 12, 16, 23, 43:', calculator('add', 9, 4, 12, 16, 23, 43)); // Output: 107
    console.log('Subtraction of 50, 10, 5:', calculator('subtract', 50, 10, 5)); // Output: 35
    console.log('Multiplication of 2, 4, 3:', calculator('multiply', 2, 4, 3)); // Output: 24
    console.log('Division of 100, 2, 5:', calculator('divide', 100, 2, 5)); // Output: 10
    console.log('Modulus of 25, 4:', calculator('modulus', 25, 4)); // Output: 1
} catch (error) {
    console.error(error.message);
}
