import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LazyFallback } from '../../shared/components/LazyFallback';

const BookMainPage = React.lazy(() => import('./pages/HomeMainPage'));

export const BookingRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    <Switch>
      <Route path="/" component={BookMainPage}></Route>
    </Switch>
  </React.Suspense>
);
