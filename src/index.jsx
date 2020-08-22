import * as offline from 'offline-plugin/runtime';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.querySelector('[data-js="app"]'));

offline.install({
  onUpdateReady: () => offline.applyUpdate(),
});
