export default class Wallet {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount) {
        if(this.balance < amount)
            throw "Not enough balance";

        this.balance -= amount;
    }
}