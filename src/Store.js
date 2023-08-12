import { createStore, combineReducers } from "redux";
import UserReducer from "./redux/user/userReducer";
import gameSlice from "./redux/game/gameSlice";

const rootReducer = combineReducers({
  user: UserReducer,
  games: gameSlice,
});

const store = createStore(rootReducer);

export default store;
