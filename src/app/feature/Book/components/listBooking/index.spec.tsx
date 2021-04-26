import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
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
    <ListBookings
      listBookingsFinded={[]}
      cancelBooking={() => null}
      isLoading={false}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente ListBookings y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <ListBookings
      listBookingsFinded={[newBook]}
      cancelBooking={() => null}
      isLoading={false}
    />
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
      <ListBookings
        listBookingsFinded={[newBook]}
        cancelBooking={() => null}
        isLoading={false}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Compara snapshot del componente ListBookings cuando no hay reservas', () => {
  const element = renderer
    .create(
      <ListBookings
        listBookingsFinded={[]}
        cancelBooking={() => null}
        isLoading={false}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Se debe renderizar correctamente el modal para ver los detalles de la reserva', () => {
  const wrapper = shallow(
    <ListBookings
      listBookingsFinded={[newBook]}
      cancelBooking={() => null}
      isLoading={false}
    />
  );

  const buttonBook = wrapper.find('#list-book-btn-detail');
  buttonBook.simulate('click');

  const { getByTestId } = render(
    <ListBookings
      listBookingsFinded={[newBook]}
      cancelBooking={() => null}
      isLoading={false}
    />
  );

  expect(getByTestId('list-bookings')).toContainElement(
    getByTestId('modal-detail-book')
  );
});

it('Se debe renderizar correctamente el modal para ver cancelar la reserva', () => {
  const wrapper = shallow(
    <ListBookings
      listBookingsFinded={[newBook]}
      cancelBooking={() => null}
      isLoading={false}
    />
  );

  const buttonBook = wrapper.find('#list-book-btn-cancel');
  buttonBook.simulate('click');

  const { getByTestId } = render(
    <ListBookings
      listBookingsFinded={[newBook]}
      cancelBooking={() => null}
      isLoading={false}
    />
  );

  expect(getByTestId('list-bookings')).toContainElement(
    getByTestId('modal-book-delete')
  );
});
