import * as ActionType from "./actionTypes";

export function beginApiCall() {
  return { type: ActionType.BEGIN_API_CALL, value: "loading" };
}

export function endApiCall() {
  return { type: ActionType.END_API_CALL, value: "success" };
}

export function errorApiCall() {
  return { type: ActionType.END_API_CALL, value: "failed" };
}
