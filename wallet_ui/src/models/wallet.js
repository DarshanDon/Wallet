import axios from "axios";

export default class Wallet {
	constructor(initialBalance) {
		this.balance = initialBalance;
		this.transactions = [];
	}

	fetchBalance() {
		return axios
			.get("https://arcane-plains-90501.herokuapp.com/wallets", {
				headers: {"X-USER": "pair-2"}
			})
			.then(response => {
				this.balance = response.data.balance;
			});
	}

	addTransaction(amount, type) {
		this.transactions.push({amount: amount, type: type});
	}

	deposit(amount) {
		return axios
			.post(
				"https://arcane-plains-90501.herokuapp.com/wallets/deposit",
				{
					amount: amount
				},
				{headers: {"X-USER": "pair-2", "Content-Type": "application/json"}}
			)
			.then(response => {
				this.balance = response.data.balance;
				this.addTransaction(amount, "Deposit");
			});
	}
}
