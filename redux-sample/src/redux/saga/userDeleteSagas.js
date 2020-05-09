import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import * as Api from "../../apiCalls/userApiCalls";

export function* DeleteRootSaga(id) {
  yield takeLatest(actionTypes.DELETE_USER_ACTION, deleteUser);
}

function* deleteUser(id) {
  console.log("user to delete:", id);
  try {
    yield put({ type: actionTypes.BEGIN_API_CALL, value: "loading" });

    yield call(Api.ManageUser("https://reqres.in/api/users", "DELETE", id));
  } catch (error) {
    yield put({ type: actionTypes.END_API_CALL, value: "failed" });
  }
}
