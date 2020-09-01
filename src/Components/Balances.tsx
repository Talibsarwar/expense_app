import React, { useContext } from 'react';
import { UserContext } from '../Components/Context/GlobalState';
export const Balances: React.FC<{}> = () => {
    const { state } = useContext(UserContext);
    const { transactions } = state;
    const amounts = transactions.map(transaction => transaction.amount);
    const initial = 0;
    const total = amounts.reduce(
        (previous, current) => (previous += current),
        initial,
    );
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id='balance'>{total}</h1>
        </div>
    );
};