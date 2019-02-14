import {mount} from "enzyme";
import React from "react";
import {WalletView} from "../../components/walletView";
import Wallet from "../../models/wallet";

describe("WalletView", () => {
	let componentRoot = mount(<WalletView model={new Wallet()}/>);
	it("renders a root element with a class name wallet", () => {
		expect(componentRoot.exists("div.wallet")).toBeTruthy();
	});

	it("renders input element for Amount", () => {
		expect(componentRoot.exists("input.amount")).toBeTruthy();
	});

	it("renders button element for Deposit", () => {
		expect(componentRoot.exists("button.deposit")).toBeTruthy();
		expect(componentRoot.find("button.deposit").text()).toEqual("Deposit");
	});

	it("renders button element for Withdraw", () => {
		expect(componentRoot.exists("button.withdraw")).toBeTruthy();
		expect(componentRoot.find("button.withdraw").text()).toEqual("Withdraw");
	});

	it("renders span element for Balance", () => {
		expect(componentRoot.exists("span.balance")).toBeTruthy();
	});

	it("updates balance when deposit button is clicked", () => {
		componentRoot = mount(<WalletView model={new Wallet(100)}/>);
		componentRoot
			.find("input.amount")
			.simulate("change", {target: {value: 10}});
		componentRoot.find("button.deposit").simulate("click");
		expect(componentRoot.find("span.balance").text()).toEqual("110");
	});

	it("updates balance when withdraw button is clicked", () => {
		componentRoot = mount(<WalletView model={new Wallet(100)}/>);
		componentRoot
			.find("input.amount")
			.simulate("change", {target: {value: 10}});
		componentRoot.find("button.withdraw").simulate("click");
		expect(componentRoot.find("span.balance").text()).toEqual("90");
	});

	it("expects to fetch balance from the server", () => {
		const wallet = new Wallet();
		wallet.fetchBalance = jest.fn();
		const fetchBalanceSpy = jest.spyOn(wallet, "fetchBalance");
		componentRoot = mount(<WalletView model={wallet}/>);
		expect(fetchBalanceSpy).toHaveBeenCalled();
	});

	describe("deposit", () => {
		it("clicking on the deposit button should trigger deposit on the wallet", () => {
			const wallet = new Wallet();
			let fakePromise = new Promise((resolve, reject) => {
				resolve()
			});
			wallet.deposit = jest
				.fn()
				.mockReturnValue(fakePromise);
			componentRoot = mount(<WalletView model={wallet}/>);
			componentRoot
				.find("input.amount")
				.simulate("change", {target: {value: 42}});
			componentRoot.find("button.deposit").simulate("click");
			expect(wallet.deposit).toHaveBeenCalledWith(42);
		});
	});
});
