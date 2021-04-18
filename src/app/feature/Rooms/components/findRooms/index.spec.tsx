import '@testing-library/jest-dom';

import { cleanup,render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { FindRooms } from './index';

afterEach(cleanup);

it('rederizar el componente FindRooms sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FindRooms onSubmit={() => null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente FindRooms y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(<FindRooms onSubmit={() => null} />);

  expect(getByTestId('find-rooms')).toContainElement(
    getByTestId('form-find-rooms')
  );

  expect(getByTestId('form-find-rooms')).toHaveFormValues({
    fromDate: '',
    untilDate: '',
    capacity: '',
    withAir: false,
    withParking: false,
  });

  expect(getByTestId('form-find-rooms')).toContainElement(
    getByTestId('form-fromDate')
  );
  expect(getByTestId('form-find-rooms')).toContainElement(
    getByTestId('form-untilDate')
  );
  expect(getByTestId('form-find-rooms')).toContainElement(
    getByTestId('form-capacity')
  );
  expect(getByTestId('form-find-rooms')).toContainElement(
    getByTestId('form-withAir')
  );
  expect(getByTestId('form-find-rooms')).toContainElement(
    getByTestId('form-withParking')
  );
  expect(getByTestId('form-find-rooms')).toContainElement(
    getByTestId('form-button-find')
  );
  expect(getByTestId('form-button-find')).toHaveAttribute('type', 'submit');
  expect(getByTestId('form-find-rooms')).toContainElement(
    getByTestId('form-button-reset')
  );
  expect(getByTestId('form-button-reset')).toHaveAttribute('type', 'reset');
});

it('Compara snapshots del componente FindRooms', () => {
  const element = renderer.create(<FindRooms onSubmit={() => null} />).toJSON();
  expect(element).toMatchSnapshot();
});
