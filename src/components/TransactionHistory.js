import * as React from "react";

export class TransactionHistory extends React.Component{
    constructor(props){
        super(props);
        this.state={history:[]}
    }

    render(){
        return(
            <div className="history">
            </div>
        )
    }
}