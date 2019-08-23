import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./application/reducers";
import Navigator from "./application/components/navigator";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Navigator />
      </Provider>
    );
  }
}
