import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import shoppingReducer from "./shopping/shopping.reducer";

const persisConfig = {
    key: "shopping",
    storage: storage, 
};
const rootReducer = combineReducers({
    shopping: shoppingReducer
})

export default persistReducer(persisConfig, rootReducer);