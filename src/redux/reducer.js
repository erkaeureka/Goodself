import { combineReducers } from "redux";
import commentSlice from "./commentSlice";

export default combineReducers({
  comment: commentSlice,
});
