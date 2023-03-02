import { applyMiddleware } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";


const middleWares = [thunk];
if (process.env.NODE_ENV === "development") middleWares.push(logger);
const finalCreateStore = applyMiddleware(...middleWares)();

export const store = finalCreateStore(rootReducer, {});

export const persistor = persistStore(store);