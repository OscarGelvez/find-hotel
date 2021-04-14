import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReservationRouter } from 'app/feature/Home/ReservationRouter';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { RoomsRouter } from 'app/feature/Rooms/RoomsRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" exact component={RoomsRouter} />
        <Route path="/reservation" component={ReservationRouter} />
      </Switch>
    </BrowserRouter>
  );
};
