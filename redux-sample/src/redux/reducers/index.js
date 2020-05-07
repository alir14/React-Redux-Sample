import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tweetReducer from "./tweetReducer";
import apiCallStatusReducer from "./apiCallStatusReducer";

export default combineReducers({
  usersData: userReducer,
  tweetsData: tweetReducer,
  apiCallsInProgress: apiCallStatusReducer,
});
