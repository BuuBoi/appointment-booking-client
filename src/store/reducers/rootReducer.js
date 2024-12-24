import userReducer from "./userReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import registerReducer from "./registerReducer";

const commonPersistConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonPersistConfig,
  key: "auth",
  whitelist: ["token"],
};

const rootReducer = combineReducers({
    user: userReducer,
    auth: persistReducer(authConfig, authReducer),
    register: registerReducer,
});

export default rootReducer;
