import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import * as Api from "../../apiCalls/userApiCalls";
import { v4 as uuidv4 } from "uuid";

export function* UpsertRootSaga() {
  yield takeLatest(actionTypes.Add_USER_ACTION, UpsertUsers);
}

function* UpsertUsers(user) {
  console.log("user to upsert:", user);
  try {
    yield put({ type: actionTypes.BEGIN_API_CALL, value: "loading" });

    if (user.id === "") {
      user.id = uuidv4();
      yield call(Api.ManageUser("https://reqres.in/api/users", "POST", user));
    } else {
      yield call(Api.ManageUser("https://reqres.in/api/users", "PUT", user));
    }

    yield put({ type: actionTypes.END_API_CALL, value: "success" });
  } catch (ex) {
    yield put({ type: actionTypes.END_API_CALL, value: "failed" });
  }
}
