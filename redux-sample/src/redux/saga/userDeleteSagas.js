import { select, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
// import * as Api from "../../apiCalls/userApiCalls";
import { defaultSelectedUser } from "../selector/defaultSelectedUser";
import { findUserSelector } from "../selector/findUserSelector";
import { currentUserSelector } from "../selector/currentUserSelector";
export function* DeleteRootSaga() {
  yield takeLatest(actionTypes.DELETE_USER_ACTION, deleteUser);
}

function* deleteUser({ id }) {
  console.log("user to delete:", id);
  try {
    yield put({ type: actionTypes.BEGIN_API_CALL, value: "loading" });

    console.log("start ");

    const current = yield select(currentUserSelector);

    const findUser = yield select(findUserSelector(id));

    const defaultUser = yield select(defaultSelectedUser);
    console.log("defaultUser selector: ", defaultUser);
    // yield call(Api.ManageUser, "https://reqres.in/api/users", "DELETE", id);

    yield put({ type: actionTypes.Complete_DELETE_USER_ACTION, value: id });
    yield put({ type: actionTypes.END_API_CALL, value: "success" });
  } catch (error) {
    console.log(error);
    yield put({ type: actionTypes.END_API_CALL, value: "failed" });
  }
}
