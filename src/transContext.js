import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransaction = [
{amount: 800, desc: "Cash"},
{amount: -40, desc: "Book"},
{amount: -200, desc: "Camera"},
{amount: -400, desc: "Utility Bills"}
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

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
           {children}
        </TransactionContext.Provider>
    )
};