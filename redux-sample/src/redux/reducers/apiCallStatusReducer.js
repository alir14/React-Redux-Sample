import * as ActionType from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  switch (action.type) {
    case ActionType.BEGIN_API_CALL:
      return action.value;
    case ActionType.API_CALL_ERROR:
      return action.value;
    case ActionType.END_API_CALL:
      return action.value;
    default:
      return state;
  }
}
