//tao store redux
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import {thunk} from "redux-thunk";


const reduxStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk)); //nhan tham 1 middleware
    const persistor = persistStore(store);
    return { store, persistor };
};
export default reduxStore;