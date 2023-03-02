import shoppingTypes from "./shopping.types";

export const saveData = (dataTransaction) => {
    return async (dispatch) => {
        try {
            dispatch({ type: shoppingTypes.SAVE_TRANSACTION, payload: dataTransaction })    
        } catch (error) {
            console.log(error);
        }
    }
}