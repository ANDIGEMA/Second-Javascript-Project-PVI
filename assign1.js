const prompt = require("prompt-sync")({ sigint: true });
let nameEnter = prompt("Enter Your Name:");
if (nameEnter.length > 10) {
    console.log("The name is rejected");
} else if (nameEnter.length <= 5) {
    console.log("The name is rejected");
} else {
    console.log("The name is Accepted");
}