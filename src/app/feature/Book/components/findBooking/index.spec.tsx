import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { FindBookingForm } from './index';

afterEach(cleanup);

it('rederizar el componente FindBookingForm sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FindBookingForm onFindBooking={() => null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente FindBookingForm y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <FindBookingForm onFindBooking={() => null} />
  );

  expect(getByTestId('find-bookings')).toContainElement(
    getByTestId('form-find-bookings')
  );

  expect(getByTestId('form-find-bookings')).toHaveFormValues({
    email: '',
    identification_type: '',
    identification: '',
  });

  expect(getByTestId('form-find-bookings')).toContainElement(
    getByTestId('form-bookings-email')
  );
  expect(getByTestId('form-find-bookings')).toContainElement(
    getByTestId('form-bookings-identification_type')
  );
  expect(getByTestId('form-find-bookings')).toContainElement(
    getByTestId('form-bookings-identification')
  );

  expect(getByTestId('form-find-bookings')).toContainElement(
    getByTestId('form-bookings-btn-submit')
  );
  expect(getByTestId('form-find-bookings')).toContainElement(
    getByTestId('form-bookings-btn-reset')
  );

  expect(getByTestId('form-bookings-btn-submit')).toHaveAttribute(
    'type',
    'submit'
  );

  expect(getByTestId('form-bookings-btn-reset')).toHaveAttribute(
    'type',
    'reset'
  );
});

it('Compara snapshots del componente FindBookingForm', () => {
  const element = renderer
    .create(<FindBookingForm onFindBooking={() => null} />)
    .toJSON();
  expect(element).toMatchSnapshot();
});
