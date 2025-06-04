// Javascript Program that when a user attempt more than 4 times it should
// block that User Account that iS it should stops the user from using that Account.
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
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
        let enteredUsername = readlineSync.question('Enter your username: ');
        let enteredPassword = readlineSync.question('Enter your password: ', { hideEchoBack: true });

        if (enteredUsername === username && enteredPassword === password) {
            console.log('Login successful. Welcome back, ' + username + '!');
            return; // Exit the function on successful login
        } else {
            attempts++;
            console.log('Invalid username or password. Please try again.');
            console.log(`Number of attempts remaining: ${maxAttempts - attempts}`);
        }
    }

    console.log('You can no longer use that account.');
    createAccount();
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