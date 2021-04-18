import { BookingRouter } from 'app/feature/Book/BookingRouter';
import { RoomsRouter } from 'app/feature/Rooms/RoomsRouter';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/booking" component={BookingRouter} />
        <Route path="/rooms" component={RoomsRouter} />
        <Redirect to="/rooms" />
      </Switch>
    </BrowserRouter>
  );
};
