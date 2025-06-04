const readlineSync = require('readline-sync');

class Greeting {
    constructor() {
        this.date = new Date();
        this.fullName = fullName;
    }

    // Full Name
    set setFullName(fullName) {
        this.fullName = fullName;
    }
    get getFullName() {
        return this.fullName;
    }

    displayDate() {
        const today = `${this.date.getFullYear()}-${String(this.date.getMonth() + 1).padStart(2, '0')}-${String(this.date.getDate()).padStart(2, '0')}`;
        return today;
    }

    greetUser(fullName) {
        console.log(`Hello, ${fullName}! Today's date is: ${this.displayDate()}`);
    }
}

// Create an instance of Greeting
const greeting = new Greeting();
greeting.setAskName = readlineSync.question('Please enter your full name: ');
greeting.greetUser(fullName);