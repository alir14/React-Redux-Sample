import { createSelector } from "reselect";

export const defaultSelectedUser = createSelector(
  (state) => {
    return state.usersData.selectedUser;
  },
  (state) => {
    return state.usersData.users;
  },
  (selectedUser, users) => {
    if (selectedUser.id !== "") {
      console.log("get selected user");
      return users.find((user) => user.id === selectedUser.id);
    } else {
      console.log("find user");
      return selectedUser;
    }
  }
);
