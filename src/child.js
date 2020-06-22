import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext';

function Child() {
    let {transactions, addTransaction} = useContext(TransactionContext);

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event)=> {
            event.preventDefault();
            addTransaction({
                amount: newAmount,
                desc: newDesc
            })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++){
         if (transactions[i].amount > 0)
            income += transactions[i].amount
        }
        return income;
    }

const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++){
        if (transactions[i].amount > 0)
            expense += transactions[i].amount
    }
    return expense;
}

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> PKR3000</h3>

            <div className="expense-container">
                <h3>INCOME <br /> PKR3000</h3>
                <h3>EXPENSE <br /> PKR900</h3>
            </div>
            
            <div className="history">History</div>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind)=>{
                    return(<li>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>)
                })}
                
            </ul>
            <h3>Add new transection</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                      Enter Description <br />
                      <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required/>
                </label>
                <br />
                <label>
                      Enter Amount <br />
                      <input type="number" onChange={(ev)=>setAmount(ev.target.value)} required/>
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;