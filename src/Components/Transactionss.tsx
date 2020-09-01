import React, { useContext } from 'react';
import { UserContext } from '../Components/Context/GlobalState';
type Second = {
    text: string;
    amount: number;
    id: number;
};

export const Transactionss: React.FC<Second> = props => {
    const sign = props.amount < 0 ? '-' : '+';
    const { dispatch } = useContext(UserContext);

    return (
        <li className={props.amount < 0 ? 'minus' : 'plus'}>
            {props.text}{' '}
            <span>
                {sign}
                {Math.abs(props.amount)}
      </span>
            <button
                onClick={() => {
                    dispatch({ type: 'DELETE_TRANSACTION', payload: props.id });
                }}
                className='delete-btn'
            >
                x
      </button>
        </li>
    );
};
