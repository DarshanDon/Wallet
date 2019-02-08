import TransactionHistory from "../../components/transactionHistory";
import {mount} from "enzyme";
import React from "react";
import Wallet from "../../Wallet";

describe("TransactionHistory",()=>{
    it("'expects to render root element with classname transaction", ()=>{
        let wallet = new Wallet();
        let transactionHistory = mount(<TransactionHistory history={wallet.transactions}/>);
        expect(transactionHistory.exists("div.transaction-history")).toBeTruthy();
    });



    it("'expects to render a table component with one deposit transaction", ()=>{
        let wallet = new Wallet();
        wallet.deposit(10);
        let transactionHistory = mount(<TransactionHistory history={wallet.transactions}/>);
        expect(transactionHistory.exists("tr.transaction-row")).toBeTruthy();
        expect(transactionHistory.exists("td.transaction-amount")).toBeTruthy();
    });
});