import React from "react";
import { Route, Switch } from "react-router-dom";
import userComponent from "./components/userContainer";
import tweetComponent from "./components/tweetComponent";
import PageNotFound from "./components/PageNotFound.js";
function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={userComponent} />
        <Route pat="/tweet" component={tweetComponent} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
