// userReducer.js
import { SET_USER, CLEAR_USER } from "./UserActionTypes";

const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default UserReducer;
