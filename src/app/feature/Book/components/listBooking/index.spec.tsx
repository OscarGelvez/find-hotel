import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { bookInfo } from '../../../../shared/utils/dataBooks';
import { IBooking } from '../../models/Booking';
import { ListBookings } from './index';

const newBook: IBooking = bookInfo;
afterEach(cleanup);

it('rederizar el componente ListBookings sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ListBookings listBookingsFinded={[]} cancelBooking={() => null} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente ListBookings y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <ListBookings listBookingsFinded={[newBook]} cancelBooking={() => null} />
  );

  expect(getByTestId('list-bookings')).toContainElement(
    getByTestId('modal-detail-book')
  );
  expect(getByTestId('list-bookings')).toContainElement(
    getByTestId('list-book-btn-detail')
  );
  expect(getByTestId('list-bookings')).toContainElement(
    getByTestId('list-book-btn-cancel')
  );
  expect(getByTestId('list-bookings')).toContainElement(
    getByTestId('modal-book-delete')
  );
});

it('Compara snapshot del componente ListBookings cuando hay reservas', () => {
  const element = renderer
    .create(
      <ListBookings listBookingsFinded={[newBook]} cancelBooking={() => null} />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Compara snapshot del componente ListBookings cuando no hay reservas', () => {
  const element = renderer
    .create(<ListBookings listBookingsFinded={[]} cancelBooking={() => null} />)
    .toJSON();
  expect(element).toMatchSnapshot();
});
