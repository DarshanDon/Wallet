import Wallet from "../Wallet";


describe("Wallet", ()=> {
    it("expects initial balance to be zero", () => {
        const wallet = new Wallet();
        expect(wallet.balance).toEqual(0);
    });

    describe("#deopsit", () => {
        it("expects to increase balance by 10 when deposit of 10 is made", () => {
            const wallet = new Wallet();
            wallet.deposit(10);
            expect(wallet.balance).toEqual(10);
        });
    });

    describe("#withdraw", () => {
        it("expects to decrease balance by 10 on withdrawal of 10 is made", () => {
            const wallet = new Wallet(100);
            wallet.withdraw(10);
            expect(wallet.balance).toEqual(90);
        });

        it("expects to raise an exception when balance is less than the withdraw amount", () => {
            const wallet = new Wallet(0);
            expect(() => {wallet.withdraw(10)}).toThrow("Not enough balance");
        });
    });

    describe("#addTransaction", () => {

    });
});