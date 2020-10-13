import * as offline from 'offline-plugin/runtime';
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/styles';
import Router from '@/routes/router';

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,

  document.querySelector('[data-js="app"]'),
);

offline.install({
  onUpdateReady: () => offline.applyUpdate(),
});
