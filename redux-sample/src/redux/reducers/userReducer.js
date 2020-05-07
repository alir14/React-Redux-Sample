import * as userActions from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function userReducer(state = initialState.usersData, action) {
  const _user = action.value;
  switch (action.type) {
    case userActions.FETCH_USER_ACTION:
      return { ...state, users: action.value };
    case userActions.EDIT_SELECTED_USER:
      return { ...state, selectedUser: action.value };
    case userActions.Add_USER_ACTION:
      return { ...state, users: [...state.users, _user] };
    case userActions.UPDATE_USER_ACTION:
      return {
        ...state,
        users: state.users.map((user) => (_user.id === user.id ? _user : user)),
      };
    case userActions.DELETE_USER_ACTION:
      return {
        ...state,
        users: state.users.filter((user) => _user.id !== user.id),
      };
    case userActions.USER_ERROR:
      return { ...state, error: action.value };
    default:
      return state;
  }
}
