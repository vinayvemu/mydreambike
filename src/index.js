import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./RootReducer/index";
import App from "./App";
import "antd/dist/antd.css";
import "./style.css";

import DynamicTheme from "./modules/Theme/container/index";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <DynamicTheme>
      <App />
    </DynamicTheme>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
