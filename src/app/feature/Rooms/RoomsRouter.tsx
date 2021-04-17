import { LazyFallback } from 'app/shared/components/LazyFallback';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const MainPage = React.lazy(() => import('./pages/Main'));
const DetailPage = React.lazy(() => import('./pages/RoomDetail'));

export const RoomsRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/detail" component={DetailPage}></Route>
      <Route path="/" component={MainPage}></Route>
    </Switch>
  </React.Suspense>
);
