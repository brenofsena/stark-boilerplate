import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spinner } from '../components';

const Main = lazy(() => import('../pages/main/main'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
