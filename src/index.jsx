import * as offline from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.querySelector('[data-js="app"]'));

offline.install({
  onUpdateReady: () => offline.applyUpdate(),
});
