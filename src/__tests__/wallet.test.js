import Wallet from "../Wallet";

describe("Wallet", () => {
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
      expect(() => {
        wallet.withdraw(10);
      }).toThrow("Not enough balance");
    });
  });

  describe("#addTransaction", () => {
    it("expects to display nothing when there is no transaction history", () => {
      const wallet = new Wallet();
      expect(wallet.transactions).toEqual([]);
    });

    it("expects to display one transaction when a deposit is made on an empty wallet", () => {
      const wallet = new Wallet();
      wallet.deposit(10);
      expect(wallet.transactions).toEqual([
        {
          amount: 10,
          type: "deposit"
        }
      ]);
    });

    it("expects to display one transaction when a withdrawal is made on the wallet", () => {
      const wallet = new Wallet(5);
      wallet.withdraw(5);
      expect(wallet.transactions).toEqual([
        {
          amount: 5,
          type: "withdrawal"
        }
      ]);
    });

    it("expects to display two transaction when a deposit and a withdrawal is made on the wallet", () => {
      const wallet = new Wallet(5);
      wallet.deposit(10);
      wallet.withdraw(5);
      expect(wallet.transactions).toEqual([
        {
          amount: 10,
          type: "deposit"
        },
        {
          amount: 5,
          type: "withdrawal"
        }
      ]);
    });
  });
});
