import { render, screen } from '@testing-library/react';
import { IStateBookings } from 'app/core/redux/modelo/IStateBookings';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { BookingRouter } from './BookingRouter';
import { IBooking } from './models/Booking';
const mockStore = configureStore([]);
import { IStateMain } from 'app/core/redux/modelo/IStateMain';

import { bookInfo } from '../../shared/utils/dataBooks';

const newBook: IBooking = bookInfo;
const listBooks: IBooking[] = [newBook];

const bookings: IStateBookings = {
  listBookings: listBooks,
  deleteBookingId: -1,
};

const main: IStateMain = {
  isLoading: false,
  errorMessage: { message: '', type: '' },
};
let store;
const history = createMemoryHistory();

test('Prueba a componente Router', () => {
  store = mockStore({
    bookings: bookings,
    main,
  });
  render(
    <Provider store={store}>
      <Router history={history}>
        <BookingRouter />
      </Router>
    </Provider>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Cargando página.../i)).toBeInTheDocument();
});
