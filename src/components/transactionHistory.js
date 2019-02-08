import * as React from "react";

export default class TransactionHistory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const transactionTable = this.props.history.map((transaction, index)=><tr key={index} className="transaction-row"><td className="transaction-amount">{transaction.amount}</td>
          <td>{transaction.type}</td></tr>
    );
    return (
      <div className="transaction-history">
          <table className="transaction-table">
              <tbody>{transactionTable}</tbody>
          </table>
      </div>
    );
  }
}
