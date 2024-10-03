// Implement a method that takes an expression and performs the calculation accordingly.
// example: calculation of [ 1+(2+3)*4-10/2 ]

// Note: Verify that BODMAS is applied in case of complex queries and the correct result is returned.


const evaluateExpression = (expression) => {

    // Helper function to perform the calculation
    const calculate = (operand1, operand2, operator) => {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);

        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) {
                    throw new Error('Division by zero is not allowed');
                }
                return num1 / num2;
            default:
                throw new Error(`Invalid operator: ${operator}`);
        }
    };

    // Helper function to apply the operator precedence (BODMAS)
    const precedence = (operator) => {
        if (operator === '+' || operator === '-') return 1;
        if (operator === '*' || operator === '/') return 2;
        return 0;
    };

    const operators = [];
    const operands = [];
    let num = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (!isNaN(char)) {
            // If the character is a number, add it
            num += char;
        } else if (char === '(') {
            operators.push(char);
        } else if (char === ')') {
            // Calculate the expression inside the parentheses
            if (num !== '') {
                operands.push(num);
                num = '';
            }
            while (operators.length && operators[operators.length - 1] !== '(') {
                const operator = operators.pop();
                const operand2 = operands.pop();
                const operand1 = operands.pop();
                operands.push(calculate(operand1, operand2, operator));
            }
            operators.pop(); // Remove the '('
        } else if (char==='+' || char==='-' || char==='*' || char==='/') {
            if (num !== '') {
                operands.push(num);
                num = '';
            }

            // Apply operators with higher or equal precedence
            while (operators.length && precedence(operators[operators.length - 1]) >= precedence(char)) {
                const operator = operators.pop();
                const operand2 = operands.pop();
                const operand1 = operands.pop();
                operands.push(calculate(operand1, operand2, operator));
            }

            operators.push(char);
        }
    }

    if (num !== '') {
        operands.push(num);
    }

    // Complete remaining calculations in the stack
    while (operators.length) {
        const operator = operators.pop();
        const operand2 = operands.pop();
        const operand1 = operands.pop();
        operands.push(calculate(operand1, operand2, operator));
    }

    return operands.pop();
};

// Testing the expression 
// const expression = '10*2/4*(4*7/2)';
const expression = '1++(2+3)*4-10/2';
const result = evaluateExpression(expression);
console.log(result); // Output: 16
