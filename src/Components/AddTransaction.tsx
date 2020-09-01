import React, { useContext } from "react";
import { UserContext } from "../Components/Context/GlobalState";
import { initNotification } from '../services/firebaseService';

export const AddTransaction: React.FC<{}> = () => {
    const { dispatch } = useContext(UserContext);

    const [text, SetText] = React.useState<string>("");
    const [amount, Setamount] = React.useState<number>(5);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                id: Math.floor(Math.random() * 10000),
                text,
                amount,
            },
        });
        SetText("type again");

        Setamount(0);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-controls">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => {
                            SetText(e.target.value);
                        }}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-controls">
                    <label htmlFor="amount">
                        Amount <br />
            (negative - expense, positive - income)
          </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => {
                            Setamount(parseInt(e.target.value));
                        }}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
                <button className="btn" onClick={initNotification}> Allow Notification </button>
            </form>
        </>
    );
};