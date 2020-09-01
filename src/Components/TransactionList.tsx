import React, { useContext } from 'react';
import { UserContext } from '../Components/Context/GlobalState';
import { Transactionss } from './Transactionss';

export const TransactionList: React.FC<{}> = () => {
    const { state } = useContext(UserContext);
    const { transactions } = state;
    return (
        <>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transactions.map(transaction => (
                    <Transactionss key={transaction.id} {...transaction} />
                ))}
            </ul>
        </>
    );
};