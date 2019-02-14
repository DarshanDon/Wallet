import * as React from "react";

export default class TransactionHistory extends React.Component {

	render() {
		const transactionTable = this.props.history.map((transaction, index) => (
			<tr key={index} className="transaction">
				<td className="amount">{transaction.amount}</td>
				<td className="type">{transaction.type}</td>
			</tr>
		));

		return (
			<div className="transaction-history">
				<table className="transaction-table">
					<tbody>{transactionTable}</tbody>
				</table>
			</div>
		);
	}
}
