import shoppingTypes from "./shopping.types";

const INITIAL_STATE = {
    transactions: [],
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shoppingTypes.SAVE_TRANSACTION:
            const newTransaction = [...state.transactions, action.payload];
            return {
                ...state,
                transactions: newTransaction,
            }
        default:   
        return state; 
    }
}

export default shoppingReducer;