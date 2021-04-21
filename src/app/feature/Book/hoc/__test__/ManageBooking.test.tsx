import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { IStateBookings } from '../../../../core/redux/modelo/IStateBookings';
import { bookInfo } from '../../../../shared/utils/dataBooks';
import { IBooking } from '../../models/Booking';
import { ManageBooking } from '../ManageBooking';

const mockStore = configureStore([]);

const newBook: IBooking = bookInfo;
const listBooks: IBooking[] = [newBook];

const bookings: IStateBookings = {
  listBookings: listBooks,
  deleteBookingId: -1,
};

describe('Prueba componente de orden superior HOC con redux', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      bookings: bookings,
    });

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ManageBooking />
        </BrowserRouter>
      </Provider>
    );
  });

  it('Compara snapshot del componente ManageRooms renderizado', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
