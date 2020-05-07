import * as apiService from "../../apiCalls/userApiCalls";
import * as actionType from "./actionTypes";
import * as apiStatus from "./apiStatusAction";

export function fetchUsers(users) {
  return {
    type: actionType.FETCH_USER_ACTION,
    value: users,
  };
}

export function AddUser(user) {
  return {
    type: actionType.Add_USER_ACTION,
    value: user,
  };
}

export function UpdateUserAction(user) {
  return {
    type: actionType.UPDATE_USER_ACTION,
    value: user,
  };
}

export function DeleteUserAction(user) {
  return {
    type: actionType.DELETE_USER_ACTION,
    value: user,
  };
}

export function UserErrorAction(error) {
  return {
    type: actionType.USER_ERROR,
    value: error,
  };
}

export function EditeSelectedUser(user) {
  return {
    type: actionType.EDIT_SELECTED_USER,
    value: user,
  };
}

export function loadUsers() {
  return function (dispatch) {
    dispatch(apiStatus.beginApiCall());
    apiService
      .GetUsers()
      .then((response) => {
        dispatch(fetchUsers(response.data));
        dispatch(apiStatus.endApiCall());
      })
      .catch((error) => {
        dispatch(fetchUsers(error));
        dispatch(apiStatus.errorApiCall());
      });
  };
}

export function editUser(user) {
  return function (dispatch) {
    dispatch(EditeSelectedUser(user));
  };
}

export function addNewUser(user) {
  return function (dispatch, getstate) {
    apiService
      .AddUser(user)
      .then((response) => {
        user.id = response.data;
        dispatch(AddUser(user));
      })
      .catch((error) => {
        dispatch(UserErrorAction(error));
        dispatch(apiStatus.errorApiCall());
      });
  };
}

export function updateUser(user) {
  return function (dispatch) {
    dispatch(apiStatus.beginApiCall());
    apiService
      .saveUser(user)
      .then((response) => {
        if (user.id === "") {
          user.id = response.data;
          dispatch(AddUser(user));
        }
        dispatch(UpdateUserAction(user));
        dispatch(apiStatus.endApiCall());
      })
      .catch((error) => {
        console.log(error);
        dispatch(apiStatus.errorApiCall());
      });
  };
}

export function deleteUser(user) {
  
}
