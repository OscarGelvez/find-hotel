import '@testing-library/jest-dom';

import { cleanup, getAllByTestId, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { NavList } from './index';

afterEach(cleanup);

const items = [
  { label: 'Habitaciones', url: '/rooms' },
  { label: 'Reservas', url: '/bookings' },
];

it('rederizar el componente NavList sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavList items={[]} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente NavList cuando se envían items', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavList items={items} />
    </BrowserRouter>
  );

  const nodes = getAllByTestId(getByTestId('nav-list'), 'nav-item-li');
  expect(nodes.length).toBe(2);
});

it('Compara snapshot del componente NavList cuando se envían items', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <NavList items={items} />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
