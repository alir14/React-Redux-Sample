import * as userActions from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function tweetReducer(state = initialState.tweetsData, action) {
  const _value = action.value;

  switch (action.type) {
    case userActions.Add_TWEET_ACTION:
      return { ...state, _value };
    case userActions.UPDATE_TWEET_ACTION:
      return state.map((tweet) => (tweet.Id === _value.Id ? _value : tweet));
    case userActions.DELETE_TWEET_ACTION:
      return state.filter((tweet) => tweet.Id !== _value.Id);
    default:
      return state;
  }
}
