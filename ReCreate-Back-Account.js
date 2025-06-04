// Javascript Program That When A userPassword and userName of Login is not the same as that
// Of the username and userPassword of createAccount
// So, The User Have ReCreate Back His Account
const readlineSync = require('readline-sync');

let username;
let password;

function welcomeMessage() {
    console.log('Welcome to UBank');
    console.log('Press C to create account');
    console.log('Press L to Login');
    console.log('Press 0 to cancel');
    makeSelection();
}

// Create Account Function
function createAccount() {
    username = readlineSync.question('Enter a username: ');
    password = readlineSync.question('Enter a password: ', { hideEchoBack: true });

    if (username && password) {
        console.log('Account created successfully. You can now login.');
        login();
    } else {
        console.log('Username and password cannot be empty.');
        createAccount();
    }
}

// Login Function
function login() {
    let enteredUsername = readlineSync.question('Enter your username: ');
    let enteredPassword = readlineSync.question('Enter your password: ', { hideEchoBack: true });
    if (enteredUsername === username && enteredPassword === password) {
        console.log('Login successful. Welcome back, ' + username + '!');
    } else {
        let numberTimes = 1;
        while (numberTimes < 4) {
            console.log('Invalid username or password. Please create an account.');
            createAccount();
        }

    }

}

// Make Selection Function
function makeSelection() {
    let choice = readlineSync.question('Please make a selection: ');

    if (choice.toUpperCase() === 'C') {
        createAccount();
    } else if (choice.toUpperCase() === 'L') {
        login();
    } else if (choice === '0') {
        console.log('Thank you for using UBank. Goodbye!');
    } else {
        console.log('Invalid selection. Please try again.');
        welcomeMessage();
    }
}

welcomeMessage();