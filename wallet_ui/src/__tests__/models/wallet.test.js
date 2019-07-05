import Wallet from "../../models/wallet";
import moxios from "moxios";

describe("Wallet", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe("#fetchBalance", () => {
    it("fetches wallet balance from the server", done => {
      let wallet = new Wallet();
      wallet.fetchBalance();

      moxios.wait(() => {
        const fetchBalanceRequest = moxios.requests.mostRecent();
        fetchBalanceRequest
          .respondWith({
            status: 200,
            response: {
              id: 42,
              balance: 42
            }
          })
          .then(() => {
            expect(wallet.balance).toBe(42);
            done();
          });
      });
    });
  });

  describe("#deposit", () => {
    it("send a request to deposit the specified amount to the wallet", done => {
      let wallet = new Wallet();
      wallet.deposit(42);

      moxios.wait(() => {
        const depositRequest = moxios.requests.mostRecent();
        depositRequest
          .respondWith({
            status: 200,
            response: {
              balance: 42
            }
          })
          .then(() => {
            expect(wallet.balance).toBe(42);
            done();
          });
      });
    });
  });
});
