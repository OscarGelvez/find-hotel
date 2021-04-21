import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { NavItem } from './index';

afterEach(cleanup);

it('rederizar el componente NavBrand sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavItem label={''} to={''} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente NavItem cuando se envía información', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavItem label={'Reservas'} to={'/reservas'} />
    </BrowserRouter>
  );
  expect(getByTestId('nav-item')).toContainElement(
    getByTestId('link-nav-item')
  );
});

it('Compara snapshot del componente NavItem cuando se envía información', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <NavItem label={'Reservas'} to={'/reservas'} />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
