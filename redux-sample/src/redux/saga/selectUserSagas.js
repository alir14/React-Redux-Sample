import { put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import * as Api from "../../apiCalls/userApiCalls";

export function* SeletRootSaga() {
  yield takeEvery(actionTypes.Request_Set_Selected_User, setSeletedUser);
}

function* setSeletedUser({ id }) {
  console.log("user to selet:", id);
  try {
    yield put({ type: actionTypes.Set_Selected_User, value: id });
  } catch (error) {
    console.log(error);
  }
}
