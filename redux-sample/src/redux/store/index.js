import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { initSaga } from "../store/initSaga";
import thunk from "redux-thunk";
import reducers from "../reducers";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const sagaMiddleware = createSagaMiddleware();
  const midllwares = applyMiddleware(thunk, sagaMiddleware);

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(midllwares)
  );

  initSaga(sagaMiddleware);
  return store;
}
