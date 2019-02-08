export default class Wallet {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
        this.transactions = [];
    }

    deposit(amount){
        this.balance += amount;
        this.addTransaction(amount,"deposit");
    }

    withdraw(amount) {
        if(this.balance < amount)
            throw "Not enough balance";

        this.balance -= amount;

        this.addTransaction(amount,"withdrawal");
    }

    addTransaction(amount, type) {
        this.transactions.push({"amount":amount, "type":type})
    }
}