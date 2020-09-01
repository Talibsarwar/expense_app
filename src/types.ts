export type First = {
    transactions: {
        id: number;
        text: string;
        amount: number;
    }[];
};

export type Actions =
    | {
        type: "ADD_TRANSACTION";
        payload: { id: number | any; amount: number; text: string };
    }
    | {
        type: "DELETE_TRANSACTION";
        payload: number;
    };