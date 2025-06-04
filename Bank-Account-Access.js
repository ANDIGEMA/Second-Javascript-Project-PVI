const readlineSync = require('readline-sync');
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = [];
        this.accountHolder = accountHolder;

        this.balance = [];
    }
    depositMoney(amount) {
        let initialTime = 0;
        while (initialTime < 3) {
            amount = parseFloat(readlineSync.question('Enter The Amount You Want: '));
            if (amount > 0) {
                this.accountNumber = amount;
                console.log(this.accountNumber);
            } else {
                console.log("Please Enter An Amount Greater Than Zero");
            }
            initialTime++;
        }

    }
    chooseLetter() {
        console.log("Press 'W' to Create An Account");
        console.log("Press 'T' to  Transfer Funds");
        console.log("Press 'C' to  Close Account");
        console.log("Press 'A' to  Apply for a Loan");
        console.log("Press 'P' to  Pay Bills");
        console.log("Press 'CA' to  check Account Balance");
        let choice = parseFloat(readlineSync.question('Enter The Following Letter Above:'));

        switch (choice) {
            case "W":
                console.log("Create A New Account");
                break;
            case "T":
                console.log("Do You Want To Transfer Funds: ");
                break;
            case "C":
                console.log("Do You Want To Apply For A Loan: ");
                break;
            case "A":
                console.log("Do You Want To Pay Bills: ");
                break;
            case "A":
                console.log("Do You Want To Check Your Account Balance: ");
                break;
            default:
                console.log("Please Select from The Above Letter: ");
        }


    }
}
const uBA = new BankAccount();
uBA.depositMoney();