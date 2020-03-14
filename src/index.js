import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./sass/style.scss";
import * as offline from "offline-plugin/runtime";

offline.install({
  onUpdateReady: () => offline.applyUpdate()
});

ReactDOM.render(<App />, document.querySelector('[data-js="app"]'));
