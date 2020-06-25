import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransaction = [
{id: 1, amount: 800, desc: "Cash"},
{id: 2, amount: -40, desc: "Book"},
{id: 3, amount: -200, desc: "Camera"},
{id: 4, amount: -400, desc: "Utility Bills"}
]

export const TransactionContext = createContext(initialTransaction);



export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

    function addTransaction(transObj){
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    
    function deleteTransaction(index) {
        dispatch( {
            type: "DELETE_TRANSACTION",
            payload: index
        })
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction, deleteTransaction
        }}>
           {children}
        </TransactionContext.Provider>
    )
};