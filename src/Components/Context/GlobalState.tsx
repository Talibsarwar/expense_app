import React, { useReducer, Dispatch } from "react";
import { First } from "../../types";
import { Actions } from "../../types";



const initialState: First = {
    transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 },
    ],
};

export const UserContext = React.createContext<{
    state: First;
    dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });
const reducer = (state: First, action: Actions) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        amount: action.payload.amount,
                    },
                ],
            };
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };

        default:
            return state;
    }
};


export const GlobalState: React.FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};