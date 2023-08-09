// store.js
import { createStore, combineReducers } from "redux";
import UserReducer from "./redux/user/userReducer";
const rootReducer = combineReducers({
  user: UserReducer,
  // other reducers...
});

const store = createStore(rootReducer);

export default store;
