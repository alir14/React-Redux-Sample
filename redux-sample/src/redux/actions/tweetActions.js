import * as ationType from "./actionTypes";
export function AddTweet(tweet) {
  return {
    type: ationType.Add_TWEET_ACTION,
    value: tweet,
  };
}

export function UpdateTweet(tweet) {
  return {
    type: ationType.UPDATE_TWEET_ACTION,
    value: tweet,
  };
}

export function DeleteTweet(id) {
  return {
    type: ationType.DELETE_TWEET_ACTION,
    value: id,
  };
}
