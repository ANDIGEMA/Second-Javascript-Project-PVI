const readlineSync = require('readline-sync');
class Person {
    constructor(fullName, date) {
        this.fullName = fullName;

    }

    get getfullName() {
        return fullName;
    }

    infoDetails() {
        console.log(`The Date is: this.fullName`);
    }
}
const fullName = toString(readlineSync.question('Enter Your FulltNumber: '));
const details = new Person(fullName);