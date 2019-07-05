import TransactionHistory from "../../components/transactionHistory";
import {mount} from "enzyme";
import React from "react";
import Wallet from "../../models/wallet";

describe("TransactionHistory", () => {
	it("'expects to render root element with classname transaction", () => {
		let wallet = new Wallet();
		let transactionHistory = mount(
			<TransactionHistory history={wallet.transactions}/>
		);
		expect(transactionHistory.exists("div.transaction-history")).toBeTruthy();
	});

	it("'expects to render a table component with classname transaction-list", () => {
		let wallet = new Wallet();
		let transactionHistory = mount(
			<TransactionHistory history={wallet.transactions}/>
		);
		expect(transactionHistory.exists("table.transaction-table")).toBeTruthy();
	});

	it("expects to render a row with amount and type after one transaction", () => {
		let wallet = new Wallet();
		wallet.deposit(10);
		let transactionHistory = mount(
			<TransactionHistory history={wallet.transactions}/>
		);
		expect(transactionHistory.exists("tr.transaction")).toBeTruthy();
		expect(transactionHistory.exists("td.amount")).toBeTruthy();
		expect(transactionHistory.exists("td.type")).toBeTruthy();
	});

	it("expects to render a row with amount as 10 and type as deposit after a deposit of 10 is made", () => {
		let wallet = new Wallet();
		wallet.deposit(10);
		let transactionHistory = mount(
			<TransactionHistory history={wallet.transactions}/>
		);
		expect(transactionHistory.find("td.amount").text()).toBe("10");
		expect(transactionHistory.find("td.type").text()).toBe("deposit");
	});

	it("expects to render a row with amount as 10 and type as withdrawal after a withdrawal of 10 is made", () => {
		let wallet = new Wallet(10);
		wallet.withdraw(10);
		let transactionHistory = mount(
			<TransactionHistory history={wallet.transactions}/>
		);

		expect(transactionHistory.find("td.amount").text()).toBe("10");
		expect(transactionHistory.find("td.type").text()).toBe("withdrawal");
	});

	it("expects to render 2 rows with deposit and withdrawal of 10 is made", () => {
		let wallet = new Wallet(10);
		wallet.deposit(10);
		wallet.withdraw(10);
		let transactionHistory = mount(
			<TransactionHistory history={wallet.transactions}/>
		);

		let transactions = transactionHistory.find("tr.transaction");
		expect(transactions.at(0).find("td.amount").text()).toBe("10");
		expect(transactions.at(0).find("td.type").text()).toBe("deposit");
		expect(transactions.at(1).find("td.amount").text()).toBe("10");
		expect(transactions.at(1).find("td.type").text()).toBe("withdrawal");
	});
});
