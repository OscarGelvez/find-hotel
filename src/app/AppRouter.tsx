import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
// import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/productos" component={HomeRouter} />
        <Route path="/home" component={HomeRouter} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};
