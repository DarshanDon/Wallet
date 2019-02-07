import * as React from "react";

export class WalletView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount : '', balance : ''};

        this.changeAmount = this.changeAmount.bind(this);
        this.depositAmount = this.depositAmount.bind(this);
        this.withdrawAmount = this.withdrawAmount.bind(this);
    }

    render() {
        return <div className="wallet">
            <input className="amount" onChange={this.changeAmount}/>
            <button className="deposit" onClick={this.depositAmount}>Deposit</button>
            <button className="withdraw" onClick={this.withdrawAmount}>Withdraw</button>
            <h2>Balance: <span className="balance">{this.state.balance}</span></h2>
        </div>
    }

    changeAmount(event){
        this.setState({amount :event.target.value});
    }

    depositAmount(){
        this.props.model.deposit(Number(this.state.amount));
        this.setState({balance : this.props.model.balance});
    }

    withdrawAmount(){
        this.props.model.withdraw(Number(this.state.amount));
        this.setState({balance : this.props.model.balance});
    }
}