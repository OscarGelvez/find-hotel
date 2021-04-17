import { ReservationRouter } from 'app/feature/Home/ReservationRouter';
import { RoomsRouter } from 'app/feature/Rooms/RoomsRouter';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/reservation" component={ReservationRouter} />
        <Route path="/" component={RoomsRouter} />
      </Switch>
    </BrowserRouter>
  );
};
