import * as actionType from "./actionTypes";
import makeActionCreator from "./makeActionCreator";

export const fetchAllUserAction = makeActionCreator(
  actionType.Request_Load_Users
);

export const addNewUserAction = makeActionCreator(
  actionType.Add_USER_ACTION,
  `user`
);

export const updateUserAction = makeActionCreator(
  actionType.UPDATE_USER_ACTION,
  `user`
);

export const deleteUserAction = makeActionCreator(
  actionType.DELETE_USER_ACTION,
  `id`
);

export const userErrorAction = makeActionCreator(
  actionType.USER_ERROR,
  `error`
);

export const selectedUserAction = makeActionCreator(
  actionType.Request_Set_Selected_User,
  `id`
);

export const modifyUserAction = makeActionCreator(
  actionType.Request_Modify,
  `user`
);
