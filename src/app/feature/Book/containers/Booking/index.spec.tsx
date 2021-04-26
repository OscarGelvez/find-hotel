import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { bookInfo } from '../../../../shared/utils/dataBooks';
import { IBooking } from '../../models/Booking';
import { Booking } from './index';

const newBook: IBooking = bookInfo;

afterEach(cleanup);

it('rederizar el componente Booking sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Booking
      listBookingsFinded={[newBook]}
      findBooking={() => null}
      cancelBooking={() => null}
      isLoading={false}
      errorMessage={{ message: '', type: '' }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente Booking y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <Booking
      listBookingsFinded={[newBook]}
      findBooking={() => null}
      cancelBooking={() => null}
      isLoading={false}
      errorMessage={{ message: '', type: '' }}
    />
  );
  expect(getByTestId('book')).toContainElement(getByTestId('find-bookings'));
  expect(getByTestId('book')).toContainElement(getByTestId('list-bookings'));
});

it('Compara snapshot del componente Booking', () => {
  const element = renderer
    .create(
      <Booking
        listBookingsFinded={[newBook]}
        findBooking={() => null}
        cancelBooking={() => null}
        isLoading={false}
        errorMessage={{ message: '', type: '' }}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
