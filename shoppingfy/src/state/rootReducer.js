import { combineReducers } from "redux";
import itemReducer from "./Item/itemsReducer";
import listReducer from "./List/listReducer";
import userReducer from "./User/userReducer";

export default combineReducers({
  auth: userReducer,
  items: itemReducer,
  lists: listReducer,
});
