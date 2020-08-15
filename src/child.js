import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';
import { initNotification } from './services/firebaseService';
import './App.css';

function Child() {
    let { transactions, addTransaction, deleteTransaction } = useContext(TransactionContext);

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc('');
        setAmount(0)
    }

    const handleDeletion = (index) => {
        deleteTransaction(index)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> PKR{getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3>INCOME <br /> PKR{getIncome()}</h3>
                <h3>EXPENSE <br /> PKR{getExpense()}</h3>
            </div>

            <div className="history">History</div>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, index) => {
                    return (<li key={index} className={transObj.amount < 0 ? 'expense-li' : 'income-li'}>
                        <button className='del' onClick={() => handleDeletion(index)}>X</button>
                        <span>{transObj.desc}</span>
                        <span className="Price">PKR{transObj.amount}</span>
                    </li>)
                })}

            </ul>
            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Description"
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"
                        value={newAmount}
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
                <input type="submit" value="Allow the Notification" onClick={initNotification} />
            </form>
        </div>
    );
}

export default Child;