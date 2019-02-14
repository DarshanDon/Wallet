import React, { Component } from 'react';
import './App.css';
import {WalletView} from "./components/walletView";
import Wallet from "./models/wallet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WalletView model={new Wallet()}/>
      </div>
    );
  }
}

export default App;
