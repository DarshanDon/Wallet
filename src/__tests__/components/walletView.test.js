import {mount} from "enzyme";
import React from "react";
import {WalletView} from "../../components/walletView";
import Wallet from "../../Wallet";


describe("WalletView", ()=>{
    let componentRoot = mount(<WalletView model={new Wallet()}/> );
    it("renders a root element with a class name wallet", () => {
        expect(componentRoot.exists("div.wallet")).toBeTruthy();
    });

    it("renders input element for Amount", () => {
        expect(componentRoot.exists("input.amount")).toBeTruthy();
    });

    it("renders button element for Deposit", () => {
        expect(componentRoot.exists("button.deposit")).toBeTruthy();
        expect(componentRoot.find("button.deposit").text()).toEqual("Deposit")
    });

    it("renders button element for Withdraw", () => {
        expect(componentRoot.exists("button.withdraw")).toBeTruthy();
        expect(componentRoot.find("button.withdraw").text()).toEqual("Withdraw")
    });

    it("renders span element for Balance", () => {
        expect(componentRoot.exists("span.balance")).toBeTruthy();
    });

    it("updates balance when deposit button is clicked", () => {
        componentRoot = mount(<WalletView model={new Wallet(100)}/> );
        componentRoot.find("input.amount").simulate("change", {target: {value: 10}});
        componentRoot.find("button.deposit").simulate('click');
        expect(componentRoot.find('span.balance').text()).toEqual("110");
    });

    it("updates balance when withdraw button is clicked", () => {
        componentRoot = mount(<WalletView model={new Wallet(100)}/> );
        componentRoot.find("input.amount").simulate("change", {target: {value: 10}});
        componentRoot.find("button.withdraw").simulate('click');
        expect(componentRoot.find('span.balance').text()).toEqual("90");
    });
});