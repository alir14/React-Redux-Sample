import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../../apiCalls/userApiCalls";
import * as actionType from "../actions/actionTypes";

export function* FetchRootSaga() {
  yield takeLatest(actionType.Request_Load_Users, fetchUserData_Saga);
}

function* fetchUserData_Saga() {
  console.log("fetchUserData_Saga start fetching");
  try {
    yield put({ type: actionType.BEGIN_API_CALL, value: "loading" });

    const users = yield call(
      api.GetUsers,
      "https://jsonplaceholder.typicode.com/users"
    );

    yield put({ type: actionType.Complete_Load_Users, value: users });

    yield put({ type: actionType.END_API_CALL, value: "success" });
  } catch (ex) {
    yield put({ type: actionType.END_API_CALL, value: "failed" });
  }
}
