import '@testing-library/jest-dom';

import { cleanup, getAllByTestId, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { NavigationHeader } from './index';

afterEach(cleanup);

const items = [
  { label: 'Habitaciones', url: '/rooms' },
  { label: 'Reservas', url: '/bookings' },
];

it('rederizar el componente NavigationHeader sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavigationHeader />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente NavigationHeader cuando se envían items', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavigationHeader />
    </BrowserRouter>
  );
  expect(getByTestId('div-header-nav')).toContainElement(
    getByTestId('div-brand')
  );

  expect(getByTestId('div-header-nav')).toContainElement(
    getByTestId('nav-list')
  );
});

it('Compara snapshot del componente NavigationHeader cuando se envían items', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <NavigationHeader />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
