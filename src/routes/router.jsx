import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Spinner } from '../components';
import client from '../services/graphql/client';

const Main = lazy(() => import('../pages/main/main'));

const Router = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default Router;
