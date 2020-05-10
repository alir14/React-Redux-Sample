import * as userActions from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function userReducer(state = initialState.usersData, action) {
  console.log("from Reducer:", action);
  const _user = action.value;
  switch (action.type) {
    case userActions.Complete_Load_Users:
      return { ...state, users: action.value };
    case userActions.Set_Selected_User:
      return {
        ...state,
        selectedUser: state.users.find((user) => user.id === action.value),
      };
    case userActions.Complete_Add_USER_ACTION:
      return { ...state, users: [...state.users, _user] };
    case userActions.UPDATE_USER_ACTION:
      return {
        ...state,
        users: state.users.map((user) => (_user.id === user.id ? _user : user)),
      };
    case userActions.Complete_DELETE_USER_ACTION:
      return {
        ...state,
        users: state.users.filter((user) => _user.id !== action.id),
      };
    case userActions.USER_ERROR:
      return { ...state, error: action.value };
    case userActions.Request_Modify:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.user.id ? action.user : user
        ),
        selectedUser: action.user,
      };
    default:
      return state;
  }
}
