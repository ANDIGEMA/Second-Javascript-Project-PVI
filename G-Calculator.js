const readlineSync = require('readline-sync');

class Calculator {
    constructor() {
        this.firstNumber = null;
        this.secondNumber = null;
        this.operator = null;
    }

    welcomeMessage() {
        console.log("Welcome To G-Calculator");
    }

    set setFirstNumber(firstNumber) {
        if (isNaN(this.firstNumber)) {
            console.log("Only Numbers  Typed Because You Typed: " + this.firstNumber);
        } else {
            this.firstNumber = firstNumber;
        }

    }

    get getFirstNumber() {
        return this.firstNumber;
    }

    set setSecondNumber(secondNumber) {
        if (isNaN(this.secondNumber)) {
            console.log("Only Numbers  Typed Because You Typed: " + this.secondNumber);
        } else {
            this.secondNumber = secondNumber;
        }
    }

    get getSecondNumber() {
        return this.secondNumber;
    }

    set setOperator(operator) {
        this.operator = operator;
    }


    get getOperator() {
        let answer;
        switch (this.operator) {
            case "+":
                answer = this.firstNumber + this.secondNumber;
                break;
            case "-":
                answer = this.firstNumber - this.secondNumber;
                break;
            case "*":
                answer = this.firstNumber * this.secondNumber;
                break;
            case "/":
                if (this.secondNumber !== 0) {
                    answer = this.firstNumber / this.secondNumber;
                } else {
                    return "This Number Is Not Divisible By Zero";
                }
                break;
            case "%":
                answer = this.firstNumber % this.secondNumber;
                break;
            default:
                return "You Didn't Enter A Mathematical Operator Sign!";
        }
        return `The Answer is: ${answer}`;
    }
}

// Create an instance of Calculator
const calculator = new Calculator();
calculator.welcomeMessage();
calculator.setFirstNumber = parseFloat(readlineSync.question('Enter the first number: '));
calculator.setOperator = readlineSync.question('Enter the operator (+, -, *, /, %): ');
calculator.setSecondNumber = parseFloat(readlineSync.question('Enter the second number: '));

// Get the result
console.log(calculator.getOperator);