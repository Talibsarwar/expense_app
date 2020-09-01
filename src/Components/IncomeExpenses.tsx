import React, { useContext } from 'react';
import { UserContext } from '../Components/Context/GlobalState';

export const IncomeExpenses: React.FC<{}> = () => {
    const { state } = useContext(UserContext);
    const { transactions } = state;
    const amount = transactions.map(transaction => transaction.amount);
    const initial = 0;
    const income = amount
        .filter(items => items > 0)
        .reduce((previous, current) => (previous += current), initial)
        .toFixed(2);

    const expense = (
        amount
            .filter(items => items < 0)
            .reduce((previous, current) => (previous += current), initial) *
        1
    ).toFixed(2);
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>
                    {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id='money-minus' className='money minus'>
                    {expense}
                </p>
            </div>
        </div>
    );
};
