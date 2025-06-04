const prompt = require("prompt-sync")({ sigint: true });
let name = prompt("Enter Your Name:");
if (name != name.toLocaleUpperCase()) {
    console.log("The name is rejected");
} else if (name == name.toLocaleUpperCase()) {
    console.log("Account created successfully");
}