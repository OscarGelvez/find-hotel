import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Loading from './index';

afterEach(cleanup);

it('rederizar el componente Loading sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente Loading y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(<Loading />);

  expect(getByTestId('view-spinner')).toContainElement(
    getByTestId('view-spinner-loader')
  );
});

it('Compara snapshot del componente Loading en modo lista', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <Loading />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
