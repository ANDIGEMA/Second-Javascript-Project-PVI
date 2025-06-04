const prompt = require("prompt-sync")({ sigint: true });
let userName;
let password;


// 
function welcomeMessage() {
    console.log("Welcome to UBANK|");
    console.log("Press C to 'Create an Account|'");
    console.log("Press L to 'Login'");
    console.log("Press  O to 'Cancel'");
}

// 
function createAccount() {
    userName = prompt("Enter Your UserName");
    password = prompt("Enter Your Password");
    if (userName && password) {
        console.log("Account created successfully. You can now login.")
    } else {
        console.log("UserName and Password cannot be empty.")
        createAccount()
    }
}

// 
function login() {
    let enteredUserName = prompt("Enter Your UserName: ");
    let enteredPassword = prompt("Enter Your UserName: ");
    if (enteredUserName == userName && enteredPassword == password) {
        console.log('Login successful. Welcome back, ' + username + '!');
    } else {
        console.log('Invalid username or password. Please create an account.');
        createAccount();
    }
}

// 
function makeSelection() {
    let choice = prompt("Please Make a selection:");
    if (choice == c) {
        createAccount();
    } else if (choice == l) {
        login();
    } else if (choice == o) {
        console.log('Thank you for using UBank. Goodbye!');
    } else {
        console.log('Invalid selection. Please try again.');
        welcomeMessage();
    }
}